// Evaluate user-owned, labelled recordings in the real browser pipeline.
import { chromium } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
if (!process.argv[2]) throw Error('Usage: node scripts/benchmark-tune.mjs manifest.json (start npm run preview:tune first)');
const manifest = resolve(process.argv[2]);
const entries = JSON.parse(await readFile(manifest, 'utf8'));
if (!Array.isArray(entries) || !entries.length) throw Error('Manifest must be a nonempty array');
const names = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
for (const entry of entries) {
  if (!entry.file || !Number.isFinite(entry.bpm) || entry.bpm <= 0 || !/^(C|C#|D|D#|E|F|F#|G|G#|A|A#|B) (major|minor)$/.test(entry.key)) throw Error('Each entry requires file, positive bpm and key, e.g. A minor');
}
const browser = await chromium.launch(process.platform === 'win32' ? { channel: 'msedge' } : {});
const rows = [];
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8000/proyecto/tune-interrogacion/');
  for (const entry of entries) {
    await page.locator('#audio-file').setInputFiles(resolve(dirname(manifest), entry.file));
    await page.waitForFunction(() => document.getElementById('results').getAttribute('aria-busy') === 'false', { }, { timeout: 190000 });
    const actual = await page.evaluate(() => ({ bpm: Number(document.getElementById('bpm').textContent) || null, note: document.getElementById('key').textContent.replaceAll('♯', '#'), scale: document.getElementById('scale').textContent, error: document.getElementById('error').hidden ? null : document.getElementById('error').textContent }));
    const key = names.includes(actual.note) ? `${actual.note} ${actual.scale === 'menor' ? 'minor' : 'major'}` : null;
    rows.push({ file: entry.file, expected: { bpm: entry.bpm, key: entry.key }, actual: { bpm: actual.bpm, key, error: actual.error }, tempoCorrect: !actual.error && actual.bpm !== null && Math.abs(actual.bpm / entry.bpm - 1) <= .04, tempoOctaveCorrect: !actual.error && actual.bpm !== null && [.5, 1, 2].some(f => Math.abs(actual.bpm * f / entry.bpm - 1) <= .04), keyCorrect: !actual.error && key === entry.key });
  }
} finally { await browser.close(); }
const count = property => rows.filter(row => row[property]).length;
console.log(JSON.stringify({ tracks: rows.length, tempoCorrect: count('tempoCorrect'), tempoOctaveCorrect: count('tempoOctaveCorrect'), keyCorrect: count('keyCorrect'), rows }, null, 2));
