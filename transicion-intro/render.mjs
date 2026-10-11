// Render de la intro: fotogramas de revisión, banda sonora y vídeo final.
//   node transicion-intro/render.mjs stills [t1,t2,...]   -> un PNG por instante (por defecto, uno por pulso)
//   node transicion-intro/render.mjs audio                -> intro.wav
//   node transicion-intro/render.mjs video                -> intro.mp4 (60 fps, 3 subfotogramas, con audio)
// Cada fotograma se obtiene con window.seek(t): el orden de captura no influye en el resultado.
import { createRequire } from 'node:module';
import { mkdirSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const require = createRequire(join(here, '..', 'package.json'));
const { chromium } = require('@playwright/test');

const [mode = 'stills', arg] = process.argv.slice(2);
const work = process.env.FRAMES_DIR || join(here, 'frames');
const FPS = 60, SUB = 3, SHUTTER = 0.5; // subfotogramas repartidos en medio fotograma: desenfoque sutil

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto(pathToFileURL(join(here, 'intro.html')).href);
await page.evaluate(() => document.fonts.ready);
const DURATION = await page.evaluate(() => window.DURATION);
const stage = page.locator('#stage');
const shot = async (t, path) => { await page.evaluate(t => window.seek(t), t); await stage.screenshot({ path }); };

if (mode === 'stills') {
  const out = join(work, 'stills');
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  const times = arg ? arg.split(',').map(Number) : [...Array(20)].map((_, b) => b * 0.5 + 0.4);
  for (const t of times) await shot(t, join(out, `t${t.toFixed(2).padStart(5, '0')}.png`));
  console.log(`${times.length} fotogramas en ${out}`);
}

if (mode === 'audio' || mode === 'video') {
  const wav = join(here, 'intro.wav');
  const b64 = await page.evaluate(() => window.renderAudio());
  writeFileSync(wav, Buffer.from(b64, 'base64'));
  console.log('audio:', wav);
}

if (mode === 'video') {
  const out = join(work, 'sub');
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  const frames = Math.round(DURATION * FPS);
  let n = 0;
  for (let f = 0; f < frames; f++) {
    for (let s = 0; s < SUB; s++) {
      const t = (f + (s / SUB) * SHUTTER) / FPS;
      await shot(Math.min(t, DURATION), join(out, `s${String(n++).padStart(5, '0')}.png`));
    }
    if (f % 60 === 0) console.log(`fotograma ${f}/${frames}`);
  }
  // Cada grupo de 3 subfotogramas se promedia en un fotograma; nunca se mezclan grupos vecinos
  const mp4 = join(here, 'intro.mp4');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error',
    '-framerate', String(FPS * SUB), '-i', join(out, 's%05d.png'),
    '-i', join(here, 'intro.wav'),
    '-vf', `tmix=frames=${SUB}:weights='1 1 1',select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB`,
    '-r', String(FPS), '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart', mp4], { stdio: 'inherit' });
  console.log('vídeo:', mp4, existsSync(mp4));
}

await browser.close();
