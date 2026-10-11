// Renderiza galaxy.html frame a frame con Playwright (Chrome) y codifica los vídeos
// que usa la web para la transición con scroll.
//
//   node transicion-galaxia/render.mjs              -> escritorio + móvil
//   node transicion-galaxia/render.mjs desktop      -> sólo un preset
//   node transicion-galaxia/render.mjs desktop --stills 1,3,5.5   -> fotogramas sueltos
//
// Los vídeos se codifican con keyframes muy seguidos (GOP corto): la web no los
// reproduce, salta a un instante concreto según el scroll, y cada salto sólo tiene
// que decodificar desde el keyframe anterior.
import { chromium } from '@playwright/test';
import { mkdirSync, writeFileSync, rmSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const mediaDir = join(here, '..', 'media', 'galaxia');
const framesRoot = process.env.FRAMES_DIR || join(here, 'frames');

const PRESETS = {
  desktop: { w: 1920, h: 1080, fps: 30, video: 'galaxia-1080.mp4', crf: 24, gop: 8, poster: 'galaxia-1080.jpg' },
  mobile: { w: 720, h: 1280, fps: 30, video: 'galaxia-movil.mp4', crf: 25, gop: 4, poster: 'galaxia-movil.jpg' },
};
const POSTER_T = 3.0; // la galaxia entera con sus sinapsis: imagen fija si no hay vídeo

const args = process.argv.slice(2);
const stillsArg = args.indexOf('--stills');
const stills = stillsArg >= 0 ? args[stillsArg + 1].split(',').map(Number) : null;
const names = args.filter(a => PRESETS[a]);
const selected = names.length ? names : Object.keys(PRESETS);

const browser = await chromium.launch({ channel: 'chrome' });
for (const name of selected) {
  const p = PRESETS[name];
  const page = await browser.newPage({ viewport: { width: p.w, height: p.h } });
  await page.goto(`${pathToFileURL(join(here, 'galaxy.html')).href}?w=${p.w}&h=${p.h}`);
  const duration = await page.evaluate(() => window.DURATION);
  const grab = t => page.evaluate(t => {
    window.render(t);
    return document.getElementById('c').toDataURL('image/png');
  }, t).then(url => Buffer.from(url.split(',')[1], 'base64'));

  const framesDir = join(framesRoot, name);
  if (stills) {
    const out = join(framesDir, 'stills');
    rmSync(out, { recursive: true, force: true });
    mkdirSync(out, { recursive: true });
    for (const t of stills) writeFileSync(join(out, `t${t.toFixed(2)}.png`), await grab(t));
    console.log(`${name}: stills en ${out}`);
  } else {
    rmSync(framesDir, { recursive: true, force: true });
    mkdirSync(framesDir, { recursive: true });
    mkdirSync(mediaDir, { recursive: true });
    const total = Math.round(duration * p.fps);
    for (let i = 0; i < total; i++) {
      writeFileSync(join(framesDir, `f${String(i).padStart(4, '0')}.png`), await grab(i / p.fps));
      if (i % 30 === 0) console.log(`${name}: frame ${i}/${total}`);
    }
    const video = join(mediaDir, p.video);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(p.fps),
      '-i', join(framesDir, 'f%04d.png'), '-an', '-c:v', 'libx264', '-preset', 'slow',
      '-crf', String(p.crf), '-pix_fmt', 'yuv420p', '-g', String(p.gop), '-keyint_min', String(p.gop),
      '-sc_threshold', '0', '-movflags', '+faststart', video], { stdio: 'inherit' });
    const poster = join(mediaDir, p.poster);
    writeFileSync(join(framesDir, 'poster.png'), await grab(POSTER_T));
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', join(framesDir, 'poster.png'), '-q:v', '4', poster]);
    console.log(`${name}: ${p.video} ${(statSync(video).size / 1e6).toFixed(1)} MB, póster ${(statSync(poster).size / 1e3).toFixed(0)} KB`);
  }
  await page.close();
}
await browser.close();
