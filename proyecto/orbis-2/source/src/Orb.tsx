import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
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

/** Neutral studio reflections: broad softboxes and black flags make real chrome,
 * without a tinted diffuse surface or any downloaded environment textures. */
function studioEnvironment(renderer: THREE.WebGLRenderer) {
  // Continuous studio lighting avoids hard rectangular reflections on the sphere.
  const width = 1024,
    height = 512,
    pixels = new Float32Array(width * height * 4);
  for (let y = 0; y < height; y++)
    for (let x = 0; x < width; x++) {
      const u = x / width,
        v = y / height;
      const h =
        v +
        0.055 * Math.sin(u * Math.PI * 2) +
        0.025 * Math.sin(u * Math.PI * 4 + 0.7);
      const gaussian = (center: number, spread: number) =>
        Math.exp(-(((h - center) / spread) ** 2));
      let light =
        (0.3 + 1.4 * gaussian(0.76, 0.24) + 0.85 * gaussian(0.25, 0.085)) *
        (1 - 0.998 * gaussian(0.49, 0.09));
      const strip =
        Math.exp(-(((u - 0.22) / 0.025) ** 2)) +
        Math.exp(-(((u - 0.74) / 0.05) ** 2));
      light += strip * 1.7 * gaussian(0.6, 0.3);
      const i = (y * width + x) * 4;
      pixels[i] = pixels[i + 1] = pixels[i + 2] = Math.max(0.008, light);
      pixels[i + 3] = 1;
    }
  const texture = new THREE.DataTexture(
    pixels,
    width,
    height,
    THREE.RGBAFormat,
    THREE.FloatType,
  );
  if (renderer.extensions.has("OES_texture_float_linear")) {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
  }
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.needsUpdate = true;
  const generator = new THREE.PMREMGenerator(renderer),
    env = generator.fromEquirectangular(texture);
  texture.dispose();
  generator.dispose();
  return env;
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
    const env = studioEnvironment(renderer);
    scene.environment = env.texture;
    let disposed = false;
    let reflection: THREE.DataTexture | undefined;
    // Local CC0 photographic HDR: retain real sky, architecture and sun edges.
    new RGBELoader()
      .setDataType(THREE.FloatType)
      .load(
        `${import.meta.env.BASE_URL}environment/venice-sunset-2k.hdr`,
        (texture) => {
          if (disposed) {
            texture.dispose();
            return;
          }
          // Neutral silver with a trace of sky colour, rather than coloured metal.
          const pixels = texture.image.data as Float32Array;
          for (let i = 0; i < pixels.length; i += 4) {
            const luminance =
              pixels[i] * 0.2126 +
              pixels[i + 1] * 0.7152 +
              pixels[i + 2] * 0.0722;
            for (let c = 0; c < 3; c++)
              pixels[i + c] = Math.pow(
                Math.max(0, luminance * 0.7 + pixels[i + c] * 0.3),
                1.15,
              );
          }
          texture.needsUpdate = true;
          texture.mapping = THREE.EquirectangularReflectionMapping;
          reflection = texture;
          scene.environment = texture;
          scene.environmentRotation.set(0, 1.7, 0);
        },
      );
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
        half = 1.55;
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
      mesh.rotation.y = time * 0.06;
      material.color.set(s.color);
      material.wireframe = s.material === "wire";
      material.metalness =
        s.material === "metal" ? 1 : s.material === "pearl" ? 0.18 : 0;
      material.roughness = s.material === "metal" ? 0.018 : 0.38;
      material.envMapIntensity = s.material === "metal" ? 1 : 1.3;
      renderer.render(scene, camera);
      // Test instrumentation reads the rendered mesh, never a nominal target value.
      if (import.meta.env.DEV && frameCount++ % 15 === 0) {
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
      disposed = true;
      reflection?.dispose();
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
