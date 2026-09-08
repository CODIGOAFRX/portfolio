/* Tune? — AGPL-3.0-or-later. */
export const RATE = 44100;
export function validateFile(file) {
  if (!file || !/\.(wav|mp3|flac|m4a|aac|ogg|aif|aiff|webm)$/i.test(file.name))
    throw Error('Elige un archivo WAV, MP3, FLAC, M4A, AAC, OGG, AIFF o WebM.');
  if (!file.size || file.size > 50 * 1024 * 1024) throw Error('El archivo debe pesar entre 1 byte y 50 MB.');
}

export function prepareSamples(buffer) {
  if (buffer.sampleRate !== RATE) throw Error('No se pudo convertir el audio a 44.1 kHz.');
  if (!Number.isFinite(buffer.duration) || buffer.duration < 6 || buffer.duration > 600 || buffer.numberOfChannels > 2)
    throw Error('Usa audio mono o estéreo de entre 6 segundos y 10 minutos.');
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, i) => buffer.getChannelData(i));
  const block = 4410;
  let peak = 0;
  const levels = [];
  for (let start = 0; start < buffer.length; start += block) {
    let energy = 0;
    for (const channel of channels) for (let i = start; i < Math.min(start + block, buffer.length); i += 8) energy += channel[i] ** 2;
    levels.push(energy); peak = Math.max(peak, energy);
  }
  const first = peak > 1e-8 ? levels.findIndex(x => x >= peak * .001) : 0;
  const offset = Math.min(Math.max(0, (first - 2) * block), buffer.length - RATE * 6);
  const length = Math.min(buffer.length - offset, RATE * 180);
  const samples = new Float32Array(length);
  const energies = channels.map(() => 0);
  let mixedEnergy = 0;
  for (let i = 0; i < length; i++) {
    for (let c = 0; c < channels.length; c++) {
      const x = channels[c][offset + i];
      if (!Number.isFinite(x)) throw Error('El audio contiene muestras no válidas.');
      samples[i] += x / channels.length;
      energies[c] += x * x;
    }
    mixedEnergy += samples[i] ** 2;
  }
  const loudest = energies.indexOf(Math.max(...energies));
  // Opposite-phase stereo can cancel completely when averaged.
  const phaseFallback = mixedEnergy < energies[loudest] * .05;
  if (phaseFallback) samples.set(channels[loudest].subarray(offset, offset + length));
  return { samples, offsetSeconds: offset / RATE, duration: buffer.duration, phaseFallback };
}

export const keyNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const camelot = [['8B','3B','10B','5B','12B','7B','2B','9B','4B','11B','6B','1B'], ['5A','12A','7A','2A','9A','4A','11A','6A','1A','8A','3A','10A']];
export const keyLabel = key => key >= 0 ? `${keyNames[key % 12]} ${key < 12 ? 'mayor' : 'menor'}` : 'Sin determinar';
export const camelotLabel = key => key >= 0 ? camelot[Math.floor(key / 12)][key % 12] : '—';
export const tempoLabel = bpm => Number.isFinite(bpm) && bpm > 0 ? String(Math.round(bpm * 10) / 10) : '—';
export const timeLabel = value => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
