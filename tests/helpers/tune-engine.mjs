import vm from 'node:vm';
import { readFileSync } from 'node:fs';
const base = new URL('../../proyecto/tune-interrogacion/', import.meta.url);
export function loadEngine() {
  const context = vm.createContext({ console, Float32Array, Uint8Array, Uint32Array, Int32Array, Float64Array, ArrayBuffer, WebAssembly, TextDecoder, TextEncoder, atob, setTimeout, clearTimeout, exports: {} });
  for (const file of ['vendor/essentia-wasm.umd.js', 'vendor/essentia.js-core.min.js', 'analysis-core.js']) {
    vm.runInContext(readFileSync(new URL(file, base), 'utf8'), context, { filename: file });
  }
  return { engine: vm.runInContext('new Essentia(exports.EssentiaWASM)', context), analysis: context.TuneAnalysis };
}

// Deterministic musical fixtures: four-beat chord changes and decaying kick/click.
export function music({ bpm = 120, seconds = 24, root = 0, minor = false, rate = 44100, drums = true, chords = true } = {}) {
  const pcm = new Float32Array(Math.ceil(seconds * rate));
  const progression = minor ? [[0,3,7], [5,8,12], [7,11,14], [0,3,7]] : [[0,4,7], [5,9,12], [7,11,14], [0,4,7]];
  for (let i = 0; i < pcm.length; i++) {
    const t = i / rate, beat = t * bpm / 60, phase = (beat % 1) * 60 / bpm;
    let x = drums ? .5 * Math.exp(-phase * 35) * Math.sin(2 * Math.PI * 70 * phase) + .2 * Math.exp(-phase * 180) * Math.sin(2 * Math.PI * 1800 * phase) : 0;
    if (chords) for (const note of progression[Math.floor(beat / 4) % 4]) {
      const f = 130.81278265 * 2 ** ((root + note) / 12);
      const envelope = .65 + .35 * Math.exp(-(beat % 4) * 2);
      for (let h = 1; h <= 4; h++) x += .08 / h * envelope * Math.sin(2 * Math.PI * f * h * t);
    }
    pcm[i] = x;
  }
  return pcm;
}

export function wav(samples, rate = 44100, channels = 1) {
  const buffer = Buffer.alloc(44 + samples.length * 2);
  buffer.write('RIFF'); buffer.writeUInt32LE(buffer.length - 8, 4); buffer.write('WAVEfmt ', 8);
  buffer.writeUInt32LE(16, 16); buffer.writeUInt16LE(1, 20); buffer.writeUInt16LE(channels, 22);
  buffer.writeUInt32LE(rate, 24); buffer.writeUInt32LE(rate * channels * 2, 28);
  buffer.writeUInt16LE(channels * 2, 32); buffer.writeUInt16LE(16, 34); buffer.write('data', 36);
  buffer.writeUInt32LE(samples.length * 2, 40);
  samples.forEach((x, i) => buffer.writeInt16LE(Math.round(Math.max(-1, Math.min(1, x)) * 32767), 44 + i * 2));
  return buffer;
}
