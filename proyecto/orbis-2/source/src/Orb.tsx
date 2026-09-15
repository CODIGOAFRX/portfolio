import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { AudioEngine } from "./audio";
import { shape } from "./analysis";

export type Settings = {
  color: string;
  material: "metal" | "pearl" | "wire";
  sensitivity: number;
  movement: number;
  smoothing: number;
};
export const defaults: Settings = {
  color: "#dba58e",
  material: "metal",
  sensitivity: 1.2,
  movement: 0.35,
  smoothing: 0.5,
};

export default function Orb({
  engine,
  settings,
}: {
  engine: AudioEngine;
  settings: Settings;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const current = useRef(settings);
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
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.domElement.setAttribute(
      "aria-label",
      "Esfera 3D reactiva al audio",
    );
    renderer.domElement.setAttribute("role", "img");
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 50);
    camera.position.set(0, 0, 5.4);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04);
    room.dispose();
    pmrem.dispose();
    scene.environment = environment.texture;
    const geometry = new THREE.SphereGeometry(1, 112, 80);
    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const original = new Float32Array(positions.array);
    const material = new THREE.MeshStandardMaterial({
      color: defaults.color,
      metalness: 1,
      roughness: 0.23,
      envMapIntensity: 2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    const key = new THREE.DirectionalLight(0xffe8d6, 3.5);
    key.position.set(-3, 4, 3);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xa5c6ff, 3);
    rim.position.set(3, -1, -2);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0xffffff, 1);
    fill.position.set(1, 0, 4);
    scene.add(fill);
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(1, height);
      camera.position.z = camera.aspect < 0.9 ? 6.2 : 5.4;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    resize();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let last = performance.now(),
      time = 0,
      frame = 0,
      visible = true;
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
      const s = current.current;
      const levels = engine.sample(dt, s.smoothing);
      const deformation = shape(levels, s.sensitivity);
      const extent = 1 + deformation.pulse + deformation.roughness + 0.045;
      const fit =
        ((Math.max(deformation.y, deformation.x / camera.aspect) * extent) /
          Math.tan(THREE.MathUtils.degToRad(18.5))) *
        1.3;
      const baseDistance = camera.aspect < 0.9 ? 6.2 : 5.4;
      camera.position.z +=
        (Math.max(baseDistance, fit) - camera.position.z) *
        (1 - Math.exp(-dt * 8));
      time += dt * s.movement * (reduced.matches ? 0.2 : 1);
      const activity = Math.min(1, levels.low + levels.mid + levels.high);
      for (let i = 0; i < positions.count; i++) {
        const x = original[i * 3],
          y = original[i * 3 + 1],
          z = original[i * 3 + 2];
        const waves =
          Math.sin(x * 5 + time) *
          Math.cos(y * 4 - time * 0.7) *
          Math.sin(z * 5 + time * 0.5);
        const fine =
          Math.sin(y * 22 + x * 8 + time * 2) * Math.cos(z * 12 - time);
        const radius =
          1 +
          waves * (0.025 + deformation.roughness) +
          fine * activity * 0.016 +
          deformation.pulse;
        positions.setXYZ(i, x * radius, y * radius, z * radius);
      }
      positions.needsUpdate = true;
      geometry.computeVertexNormals();
      mesh.scale.set(deformation.x, deformation.y, deformation.x);
      // Only rotate around Y: the gravity/treble axis stays visually vertical.
      mesh.rotation.y = time * 0.22;
      material.color.set(s.color);
      material.wireframe = s.material === "wire";
      material.metalness =
        s.material === "metal" ? 1 : s.material === "pearl" ? 0.12 : 0.3;
      material.roughness = s.material === "pearl" ? 0.35 : 0.23;
      material.envMapIntensity = s.material === "metal" ? 2 : 1.1;
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      geometry.dispose();
      material.dispose();
      environment.dispose();
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
