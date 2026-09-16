import { describe, it, expect } from "vitest";
import { SphereGeometry } from "three";
import { deformSurface, meshVolume } from "../src/deformation";
import { silence, type Bands } from "../src/analysis";

const geometry = new SphereGeometry(1, 192, 128);
const original = new Float32Array(geometry.attributes.position.array);
const indices = geometry.index!.array;
const baseline = meshVolume(original, indices);
const extent = (points: Float32Array, axis: number) => {
  let min = Infinity,
    max = -Infinity;
  for (let i = axis; i < points.length; i += 3) {
    min = Math.min(min, points[i]);
    max = Math.max(max, points[i]);
  }
  return max - min;
};

describe("the rendered surface conserves volume, not just axis scales", () => {
  it("matches a unit sphere before deformation", () => {
    expect(baseline).toBeCloseTo((4 * Math.PI) / 3, 2);
  });
  it("retains volume and bounded height across silence, individual bands and loud mixed signals", () => {
    const output = new Float32Array(original.length);
    let maxVolumeError = 0,
      maxHeightError = 0;
    for (const sensitivity of [0.2, 1.2, 3])
      for (const time of [0, 0.2, 1, 3, 7, 20, 80])
        for (const bands of [
          silence(),
          { ...silence(), low: 1, rms: 1 },
          { ...silence(), mid: 1, rms: 1 },
          { ...silence(), high: 1, rms: 1 },
          { low: 1, mid: 1, high: 1, rms: 1, dominant: 80 },
        ]) {
          deformSurface(
            original,
            output,
            indices,
            baseline,
            bands,
            sensitivity,
            time,
          );
          maxVolumeError = Math.max(
            maxVolumeError,
            Math.abs(meshVolume(output, indices) / baseline - 1),
          );
          maxHeightError = Math.max(
            maxHeightError,
            Math.abs(extent(output, 1) / 2 - 1),
          );
          expect(extent(output, 0)).toBeLessThan(2.9);
          expect(output.every(Number.isFinite)).toBe(true);
        }
    expect(maxVolumeError).toBeLessThan(1e-6);
    expect(maxHeightError).toBeLessThan(0.08);
    console.log({ maxVolumeError, maxHeightError, cases: 105 });
  });
  it("ordinary music levels produce clearly visible local deformation", () => {
    const quiet = new Float32Array(original.length),
      playing = new Float32Array(original.length);
    deformSurface(original, quiet, indices, baseline, silence(), 1.2, 2);
    deformSurface(
      original,
      playing,
      indices,
      baseline,
      { low: 0.3, mid: 0.2, high: 0.1, rms: 0.2, dominant: 80 },
      1.2,
      2,
    );
    let sum = 0;
    for (let i = 0; i < quiet.length; i++) sum += (quiet[i] - playing[i]) ** 2;
    // RMS coordinate displacement exceeds 5% of the unit radius at default settings.
    expect(Math.sqrt(sum / quiet.length)).toBeGreaterThan(0.05);
  });
  it("a louder RMS value alone never inflates the figure", () => {
    const a = new Float32Array(original.length),
      b = new Float32Array(original.length);
    deformSurface(
      original,
      a,
      indices,
      baseline,
      { ...silence(), mid: 0.4, rms: 0.01 },
      1.2,
      3,
    );
    deformSurface(
      original,
      b,
      indices,
      baseline,
      { ...silence(), mid: 0.4, rms: 1 },
      1.2,
      3,
    );
    expect(a).toEqual(b);
  });
  it("fluid movement is continuous and changes the surface instead of merely scaling it", () => {
    const a = new Float32Array(original.length),
      b = new Float32Array(original.length);
    const bands: Bands = {
      low: 0.4,
      mid: 0.6,
      high: 0.3,
      rms: 0.5,
      dominant: 800,
    };
    deformSurface(original, a, indices, baseline, bands, 1.2, 2);
    deformSurface(original, b, indices, baseline, bands, 1.2, 2 + 1 / 60);
    let maxStep = 0,
      changed = 0;
    for (let i = 0; i < a.length; i++) {
      maxStep = Math.max(maxStep, Math.abs(a[i] - b[i]));
      if (Math.abs(a[i] - original[i]) > 0.01) changed++;
    }
    expect(maxStep).toBeLessThan(0.005);
    expect(maxStep).toBeGreaterThan(0.00001);
    expect(changed).toBeGreaterThan(2000);
  });
});
