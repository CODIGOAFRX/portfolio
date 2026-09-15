import { writeFileSync } from "node:fs";
// Original deterministic 32-second electronic loop. No third-party recording.
const sr = 44100,
  seconds = 32,
  count = sr * seconds;
const samples = new Float32Array(count);
const bassNotes = [55, 55, 65.406, 49];
const notes = [220, 261.626, 329.628, 392, 440, 392, 329.628, 261.626];
let seed = 913;
function noise() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return (seed / 4294967296) * 2 - 1;
}
for (let i = 0; i < count; i++) {
  const t = i / sr,
    beat = t % 0.5,
    half = t % 0.25;
  const bar = Math.floor(t / 2),
    base = bassNotes[Math.floor(t / 8)];
  const kickPhase =
    2 * Math.PI * (46 * beat + 80 * 0.022 * (1 - Math.exp(-beat / 0.022)));
  const kick = Math.sin(kickPhase) * Math.exp(-beat * 17) * 0.48;
  const bass =
    Math.sin(2 * Math.PI * base * t) *
    (1 - Math.exp(-beat * 45)) *
    Math.exp(-beat * 3) *
    0.22;
  const hatEnv = Math.exp(-half * 100);
  const hat = noise() * hatEnv * (Math.floor(t * 4) % 2 ? 0.09 : 0.045);
  const snareT = (t % 1) - 0.5;
  const snare = snareT >= 0 ? noise() * Math.exp(-snareT * 35) * 0.13 : 0;
  const note = notes[(Math.floor(t * 4) + (bar % 4)) % notes.length];
  const arp =
    (Math.sin(2 * Math.PI * note * t) +
      0.2 * Math.sin(2 * Math.PI * note * 2 * t)) *
    Math.exp(-half * 13) *
    0.095;
  const pad =
    (Math.sin(2 * Math.PI * base * 4 * t) +
      Math.sin(2 * Math.PI * base * 6 * t)) *
    0.032 *
    (0.6 + 0.4 * Math.sin(t * 0.4));
  const fade = Math.min(1, t * 4, (seconds - t) * 3);
  samples[i] = (kick + bass + hat + snare + arp + pad) * fade;
}
const out = Buffer.alloc(44 + count * 2);
out.write("RIFF", 0);
out.writeUInt32LE(36 + count * 2, 4);
out.write("WAVEfmt ", 8);
out.writeUInt32LE(16, 16);
out.writeUInt16LE(1, 20);
out.writeUInt16LE(1, 22);
out.writeUInt32LE(sr, 24);
out.writeUInt32LE(sr * 2, 28);
out.writeUInt16LE(2, 32);
out.writeUInt16LE(16, 34);
out.write("data", 36);
out.writeUInt32LE(count * 2, 40);
for (let i = 0; i < count; i++)
  out.writeInt16LE(
    Math.round(Math.max(-1, Math.min(1, samples[i])) * 32767),
    44 + i * 2,
  );
writeFileSync(new URL("../public/demo.wav", import.meta.url), out);
console.log("Generated original demo: 32 s / mono PCM 44.1 kHz.");
