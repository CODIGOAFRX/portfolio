import { shape, type Bands } from "./analysis";

/** Signed tetrahedra give the volume of the actual closed triangle mesh. */
export function meshVolume(
  vertices: ArrayLike<number>,
  indices: ArrayLike<number>,
): number {
  let v = 0;
  for (let i = 0; i < indices.length; i += 3) {
    const a = indices[i] * 3,
      b = indices[i + 1] * 3,
      c = indices[i + 2] * 3;
    v +=
      vertices[a] *
        (vertices[b + 1] * vertices[c + 2] -
          vertices[b + 2] * vertices[c + 1]) +
      vertices[a + 1] *
        (vertices[b + 2] * vertices[c] - vertices[b] * vertices[c + 2]) +
      vertices[a + 2] *
        (vertices[b] * vertices[c + 1] - vertices[b + 1] * vertices[c]);
  }
  return Math.abs(v / 6);
}

/** Smooth, bounded liquid motion. The final correction conserves mesh volume,
 * including local ripples, rather than just preserving the global scale product. */
export function deformSurface(
  original: Float32Array,
  output: Float32Array,
  indices: ArrayLike<number>,
  referenceVolume: number,
  bands: Bands,
  sensitivity: number,
  time: number,
) {
  const s = shape(bands, sensitivity);
  const strength = 0.008 + s.flow * 0.46;
  for (let i = 0; i < original.length; i += 3) {
    const x = original[i],
      y = original[i + 1],
      z = original[i + 2];
    const broad =
      Math.sin(x * 3.1 + y * 1.8 + time * 0.82) *
      Math.cos(z * 2.9 - y * 1.2 - time * 0.58);
    const folds =
      Math.sin(x * 5.4 - z * 3.2 - time * 0.7) *
      Math.cos(y * 4.1 + z * 2.3 + time * 0.42);
    const ripple =
      Math.sin(x * 8.2 + y * 5.5 + z * 3.8 + time * 1.1) *
      Math.cos(z * 6.1 - y * 3.7 - time * 0.73);
    const d =
      strength * (broad * 0.6 + folds * 0.4) + s.detail * 0.055 * ripple;
    output[i] = x * (1 + d) * s.x;
    output[i + 1] = y * (1 + d * 0.12) * s.y;
    output[i + 2] = z * (1 + d) * s.z;
  }
  const volume = meshVolume(output, indices);
  const correction = Math.sqrt(referenceVolume / Math.max(volume, 1e-12));
  // Correct the two horizontal axes only: preserve height and total volume.
  for (let i = 0; i < output.length; i += 3) {
    output[i] *= correction;
    output[i + 2] *= correction;
  }
}
