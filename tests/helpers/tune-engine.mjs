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

// Arrangement fixtures: real drum patterns with swing, timing jitter and velocity, so the tempo
// stage is judged on syncopation and subdivision rather than on a metronome. Seeded per call.
export function groove({ bpm = 150, seconds = 30, pattern = patterns.trap, swing = 0, jitter = .004, root = 0, minor = true, seed = 987654321, rate = 44100 } = {}) {
  let state = seed >>> 0;
  const random = () => { state = (Math.imul(state, 1664525) + 1013904223) >>> 0; return state / 2 ** 32; };
  const pcm = new Float32Array(Math.round(seconds * rate));
  const step = 60 / bpm / 4;
  const add = (at, voice) => { const start = Math.round(at * rate); for (let i = 0; i < voice.length && start + i < pcm.length; i++) if (start + i >= 0) pcm[start + i] += voice.sample(i / rate); };
  const kick = level => ({ length: rate * .5, sample: t => level * Math.exp(-t * 14) * Math.sin(2 * Math.PI * (48 + 90 * Math.exp(-t * 40)) * t) });
  const snare = level => ({ length: rate * .35, sample: t => level * Math.exp(-t * 22) * ((random() - .5) * 1.4 + .5 * Math.sin(2 * Math.PI * 190 * t)) });
  const hat = level => { let previous = 0; return { length: Math.round(rate * .09), sample: t => { const noise = random() - .5, value = noise - previous; previous = noise; return level * Math.exp(-t * 70) * value; } }; };
  for (let s = 0; s < Math.floor(seconds / step); s++) {
    const at = s * step + (swing && s % 2 ? swing * step : 0) + (random() - .5) * jitter, hit = pattern(s % 16);
    if (hit.kick) add(at, kick(hit.kick * (.85 + .3 * random())));
    if (hit.snare) add(at, snare(hit.snare * (.85 + .3 * random())));
    if (hit.hat) add(at, hat(hit.hat * (.7 + .6 * random())));
  }
  const progression = minor ? [[0,3,7,10], [5,8,12,15], [3,7,10,14], [0,3,7,10]] : [[0,4,7,11], [5,9,12,16], [7,11,14,17], [0,4,7,11]];
  const bar = 60 / bpm * 4;
  for (let i = 0; i < pcm.length; i++) {
    const t = i / rate, chord = progression[Math.floor(t / bar) % 4];
    for (const note of chord) for (let h = 1; h <= 3; h++) pcm[i] += .05 / h * Math.sin(2 * Math.PI * 130.81278265 * 2 ** ((root + note) / 12) * h * t);
    pcm[i] += .3 * Math.sin(2 * Math.PI * 130.81278265 / 2 * 2 ** ((root + chord[0]) / 12) * t);
  }
  let peak = 0;
  for (const x of pcm) peak = Math.max(peak, Math.abs(x));
  if (peak > 0) for (let i = 0; i < pcm.length; i++) pcm[i] = pcm[i] / peak * .9;
  return pcm;
}

// Sixteenth-step patterns. The beat is always the quarter note, whatever the subdivision does.
export const patterns = {
  trap: step => ({ kick: [0, 6, 10].includes(step) ? 1 : 0, snare: step === 8 ? .8 : 0, hat: .35 * (step % 2 === 0 ? 1.3 : 1) }),
  boombap: step => ({ kick: [0, 7, 10].includes(step) ? 1 : 0, snare: [4, 12].includes(step) ? .85 : 0, hat: step % 2 === 0 ? .4 : 0 }),
  house: step => ({ kick: step % 4 === 0 ? 1 : 0, snare: [4, 12].includes(step) ? .6 : 0, hat: step % 4 === 2 ? .5 : 0 }),
  halftime: step => ({ kick: step === 0 ? 1 : 0, snare: step === 8 ? .9 : 0, hat: step % 4 === 0 ? .3 : 0 }),
};
