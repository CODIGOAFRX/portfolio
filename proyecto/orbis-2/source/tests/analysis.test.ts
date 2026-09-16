import { describe, it, expect } from "vitest";
import { analyze, shape, silence } from "../src/analysis";

describe("frequency to geometry contract", () => {
  for (const sampleRate of [44100, 48000]) {
    for (const [hz, expected] of [
      [80, "low"],
      [800, "mid"],
      [6000, "high"],
    ] as const) {
      it(`${hz} Hz at ${sampleRate} Hz belongs to ${expected}`, () => {
        const spectrum = new Float32Array(2048).fill(-Infinity);
        spectrum[Math.round((hz * 4096) / sampleRate)] = -12;
        const waveform = Float32Array.from(
          { length: 4096 },
          (_, i) => 0.3 * Math.sin((2 * Math.PI * hz * i) / sampleRate),
        );
        const result = analyze(spectrum, waveform, sampleRate, 4096);
        expect(result[expected]).toBeGreaterThan(0.5);
        for (const other of ["low", "mid", "high"] as const)
          if (other !== expected) expect(result[other]).toBe(0);
        expect(Math.abs(result.dominant - hz)).toBeLessThan(sampleRate / 4096);
      });
    }
  }
  it("silence has no energy even if a spectral buffer is stale", () => {
    expect(
      analyze(
        new Float32Array(2048).fill(-10),
        new Float32Array(4096),
        44100,
        4096,
      ),
    ).toEqual(silence());
    expect(shape(silence(), 3)).toEqual({
      x: 1,
      y: 1,
      z: 1,
      flow: 0,
      detail: 0,
    });
  });
  it("bass flattens and widens, treble narrows and stretches", () => {
    const bass = shape({ ...silence(), low: 0.8 }, 1);
    const treble = shape({ ...silence(), high: 0.8 }, 1);
    expect(bass.x).toBeGreaterThan(1);
    expect(bass.y).toBeLessThan(1);
    expect(treble.x).toBeLessThan(1);
    expect(treble.y).toBeGreaterThan(1);
  });
  it("maximal sensitivity never inverts the geometry", () => {
    const max = shape({ low: 1, mid: 1, high: 1, rms: 1, dominant: 100 }, 3);
    expect(max.x).toBeGreaterThan(0);
    expect(max.y).toBeGreaterThan(0);
    expect(max.x * max.y * max.z).toBeCloseTo(1, 12);
  });
});
