export type Bands = {
  low: number;
  mid: number;
  high: number;
  rms: number;
  dominant: number;
};
export const silence = (): Bands => ({
  low: 0,
  mid: 0,
  high: 0,
  rms: 0,
  dominant: 0,
});

/** Sum linear power, never average dB. Disjoint ranges retain narrow-band tones. */
export function analyze(
  spectrum: Float32Array,
  signal: Float32Array,
  sampleRate: number,
  fftSize: number,
): Bands {
  let square = 0;
  for (const value of signal) square += value * value;
  const rms = Math.sqrt(square / Math.max(1, signal.length));
  if (rms < 0.0001) return silence();
  const power = [0, 0, 0];
  let peak = -Infinity,
    peakIndex = 0;
  for (let i = 1; i < spectrum.length; i++) {
    const hz = (i * sampleRate) / fftSize;
    if (hz < 20 || hz > 20000) continue;
    const db = spectrum[i];
    if (!Number.isFinite(db)) continue;
    power[hz < 250 ? 0 : hz < 2000 ? 1 : 2] += 10 ** (db / 10);
    if (db > peak) {
      peak = db;
      peakIndex = i;
    }
  }
  // Artistic display gain compensates for the analyser's Blackman-window attenuation.
  // These 0–1 values drive geometry; they are not calibrated loudness measurements.
  const energy = power.map((p) => Math.min(1, Math.sqrt(p) * 4.8));
  return {
    low: energy[0],
    mid: energy[1],
    high: energy[2],
    rms,
    dominant: (peakIndex * sampleRate) / fftSize,
  };
}

export function shape(bands: Bands, sensitivity: number) {
  const low = Math.min(1.3, bands.low * sensitivity);
  const high = Math.min(1.3, bands.high * sensitivity);
  return {
    x: 1 + low * 0.52 - high * 0.25,
    y: 1 - low * 0.32 + high * 0.58,
    roughness: Math.min(0.28, bands.mid * sensitivity * 0.22 + high * 0.045),
    pulse: Math.min(0.16, bands.rms * sensitivity * 0.28),
  };
}
