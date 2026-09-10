import { test, expect } from '@playwright/test';
import { music, wav } from '../tests/helpers/tune-engine.mjs';
const path = '/proyecto/tune-interrogacion/';
const upload = (page, samples, name = 'beat.wav', rate = 44100) => page.locator('#audio-file').setInputFiles({ name, mimeType: 'audio/wav', buffer: wav(samples, rate) });

test('actual WASM runs under production CSP; 48 kHz decode, slow tempo and safe filename', async ({ page, request }) => {
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  const response = await page.goto(path);
  expect(response.headers()['content-security-policy']).not.toContain('unsafe-eval');
  const worker = await request.get(path + 'analyzer.worker.js?v=0.4.0');
  expect(worker.headers()['content-security-policy']).toContain("'unsafe-eval'");
  await upload(page, music({ bpm: 70, rate: 48000 }), '<img onerror=alert(1)>.wav', 48000);
  await expect(page.locator('#status')).toHaveText('Analizado');
  expect(Math.abs(Number(await page.locator('#bpm').textContent()) - 70)).toBeLessThan(.5);
  await expect(page.locator('#key')).toHaveText('C');
  await expect(page.locator('#camelot')).toHaveText('8B');
  await expect(page.locator('#filename')).toHaveText('<img onerror=alert(1)>.wav');
  await expect(page.locator('#filename img')).toHaveCount(0);
  await page.locator('#double-tempo').click();
  expect(Number(await page.locator('#bpm').textContent())).toBeCloseTo(140, 0);
  await page.locator('#original-tempo').click();
  expect(Number(await page.locator('#bpm').textContent())).toBeCloseTo(70, 0);
  await expect(page.locator('#player')).toHaveAttribute('src', /^blob:/);
  expect(failures).toEqual([]);
  await page.screenshot({ path: 'test-results/tune-desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  await page.screenshot({ path: 'test-results/tune-mobile.png', fullPage: true });
});

test('silence, corrupt files, cancellation, and retry leave a usable interface', async ({ page }) => {
  await page.goto(path);
  await upload(page, new Float32Array(44100 * 6), 'silencio.wav');
  await expect(page.locator('#status')).toHaveText('Analizado');
  await expect(page.locator('#bpm')).toHaveText('—');
  await expect(page.locator('#key')).toHaveText('—');
  await page.locator('#audio-file').setInputFiles({ name: 'roto.mp3', mimeType: 'audio/mpeg', buffer: Buffer.from('not audio') });
  await expect(page.locator('#error')).toBeVisible();
  await expect(page.locator('#select-audio')).toBeVisible();
  await upload(page, music({ seconds: 30 }));
  await page.locator('#cancel').click();
  await expect(page.locator('#status')).toHaveText('Esperando audio');
  await upload(page, music({ root: 9, minor: true, bpm: 100 }));
  await expect(page.locator('#status')).toHaveText('Analizado');
  await expect(page.locator('#key')).toHaveText('A');
  await expect(page.locator('#scale')).toHaveText('menor');
  await expect(page.locator('#error')).toBeHidden();
});

test('missing engine reports a failure instead of hanging and can recover', async ({ page }) => {
  await page.route('**/vendor/essentia-wasm.umd.js', route => route.abort());
  await page.goto(path);
  await upload(page, music({ seconds: 6 }));
  await expect(page.locator('#error')).toContainText('No se pudo cargar el motor');
  await expect(page.locator('#select-audio')).toBeVisible();
  await page.unroute('**/vendor/essentia-wasm.umd.js');
  await upload(page, new Float32Array(44100 * 6));
  await expect(page.locator('#status')).toHaveText('Analizado');
});

test('old production CSP reproduces the original engine failure', async ({ page }) => {
  await page.route('**/analyzer.worker.js?*', async route => {
    const response = await route.fetch();
    await route.fulfill({ response, headers: { ...response.headers(), 'content-security-policy': "default-src 'self'; script-src 'self'" } });
  });
  await page.goto(path);
  await upload(page, music({ seconds: 6 }));
  await expect(page.locator('#error')).toContainText('No se pudo cargar el motor');
});
