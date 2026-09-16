import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { AudioEngine } from "./audio";
import { deformSurface, meshVolume } from "./deformation";

export type Settings = {
  color: string;
  material: "metal" | "pearl" | "wire";
  background: "light" | "dark";
  sensitivity: number;
  movement: number;
  smoothing: number;
};
export const defaults: Settings = {
  color: "#ffffff",
  material: "metal",
  background: "light",
  sensitivity: 1.2,
  movement: 0.45,
  smoothing: 0.65,
};

/** Procedural open sea and sky: no buildings, roads or downloaded panorama. */
function oceanEnvironment(renderer: THREE.WebGLRenderer) {
  const width = 2048,
    height = 1024;
  const pixels = new Float32Array(width * height * 4);
  for (let y = 0; y < height; y++) {
    const elevation = (y / (height - 1) - 0.5) * Math.PI;
    const up = Math.sin(elevation);
    for (let x = 0; x < width; x++) {
      const azimuth = (x / width) * Math.PI * 2;
      let r: number, g: number, b: number;
      if (up >= 0) {
        const haze = Math.exp(-up * 5);
        const cloud =
          Math.pow(
            Math.max(
              0,
              Math.sin(azimuth * 3 + up * 10) * Math.sin(azimuth * 5 - up * 17),
            ),
            6,
          ) *
          Math.sin(up * Math.PI) *
          0.35;
        r = 0.48 + haze * 0.95 + cloud;
        g = 0.63 + haze * 0.85 + cloud;
        b = 0.88 + haze * 0.65 + cloud;
      } else {
        const distance = Math.cos(elevation) / Math.max(0.012, -up);
        const px = Math.cos(azimuth) * distance,
          pz = Math.sin(azimuth) * distance;
        const wave =
          Math.sin(px * 8 + Math.sin(pz * 3)) * 0.5 +
          Math.sin(pz * 14 + px * 3) * 0.3 +
          Math.sin(px * 23 - pz * 11) * 0.2;
        const crest = Math.pow(Math.max(0, wave), 5);
        const horizon = Math.exp(up * 18);
        const light = 0.045 + horizon * 0.1 + (wave + 1) * 0.07 + crest * 1.9;
        r = light * 0.65;
        g = light * 0.84;
        b = light;
      }
      const i = (y * width + x) * 4;
      pixels[i] = r;
      pixels[i + 1] = g;
      pixels[i + 2] = b;
      pixels[i + 3] = 1;
    }
  }
  const texture = new THREE.DataTexture(
    pixels,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType,
  );
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.needsUpdate = true;
  const generator = new THREE.PMREMGenerator(renderer);
  const environment = generator.fromEquirectangular(texture);
  generator.dispose();
  texture.dispose();
  return environment;
}
export default function Orb({
  engine,
  settings,
}: {
  engine: AudioEngine;
  settings: Settings;
}) {
  const mount = useRef<HTMLDivElement>(null),
    current = useRef(settings);
  const [error, setError] = useState("");
  current.current = settings;
  useEffect(() => {
    const host = mount.current!;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setError(
        "No se ha podido iniciar la esfera 3D. Activa la aceleración gráfica de tu navegador y recarga la página.",
      );
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.setAttribute(
      "aria-label",
      "Esfera 3D reactiva al audio",
    );
    renderer.domElement.setAttribute("role", "img");
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const env = oceanEnvironment(renderer);
    scene.environment = env.texture;
    // Orthographic, fixed framing: audio never changes the camera or zoom.
    const camera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 30);
    camera.position.set(0, 0, 6);
    const geometry = new THREE.SphereGeometry(1, 192, 128),
      positions = geometry.attributes.position as THREE.BufferAttribute;
    const original = new Float32Array(positions.array),
      indices = geometry.index!.array;
    const referenceVolume = meshVolume(original, indices);
    const material = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      metalness: 1,
      roughness: 0.018,
      envMapIntensity: 1,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const fill = new THREE.DirectionalLight(0xffffff, 2);
    fill.position.set(-3, 4, 4);
    scene.add(fill);
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height);
      const aspect = width / Math.max(height, 1),
        half = 1.85;
      camera.left = -half * Math.max(aspect, 1);
      camera.right = -camera.left;
      camera.top = half * Math.max(1 / aspect, 1);
      camera.bottom = -camera.top;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      time = 0,
      last = performance.now(),
      visible = !document.hidden,
      frameCount = 0;
    const visibility = () => {
      visible = !document.hidden;
      last = performance.now();
    };
    document.addEventListener("visibilitychange", visibility);
    const lost = (event: Event) => {
      event.preventDefault();
      setError(
        "Se ha interrumpido la aceleración gráfica. Recarga la página para recuperar la esfera.",
      );
    };
    renderer.domElement.addEventListener("webglcontextlost", lost);
    const animate = (now: number) => {
      frame = requestAnimationFrame(animate);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visible) return;
      const s = current.current,
        bands = engine.sample(dt, s.smoothing);
      time +=
        dt *
        s.movement *
        (1.6 + bands.low * 2.5 + bands.mid * 2) *
        (reduced.matches ? 0.15 : 1);
      deformSurface(
        original,
        positions.array as Float32Array,
        indices,
        referenceVolume,
        bands,
        s.sensitivity,
        time,
      );
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      // Keep the frequency axes aligned with the screen.
      material.color.set(s.color);
      material.wireframe = s.material === "wire";
      material.metalness =
        s.material === "metal" ? 1 : s.material === "pearl" ? 0.18 : 0;
      material.roughness = s.material === "metal" ? 0.018 : 0.38;
      material.envMapIntensity = s.material === "metal" ? 1 : 1.3;
      renderer.render(scene, camera);
      // Test instrumentation reads the rendered mesh, never a nominal target value.
      if (import.meta.env.DEV && frameCount++ % 15 === 0) {
        geometry.computeBoundingBox();
        const size = geometry.boundingBox!.getSize(new THREE.Vector3());
        renderer.domElement.dataset.extent = JSON.stringify([
          size.x,
          size.y,
          size.z,
        ]);
        renderer.domElement.dataset.volumeRatio = String(
          meshVolume(positions.array, indices) / referenceVolume,
        );
        renderer.domElement.dataset.camera = JSON.stringify([
          camera.left,
          camera.right,
          camera.top,
          camera.bottom,
          camera.position.z,
        ]);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      geometry.dispose();
      material.dispose();
      env.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [engine]);
  return (
    <div className="orb-render" ref={mount}>
      {error && (
        <div className="graphics-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
