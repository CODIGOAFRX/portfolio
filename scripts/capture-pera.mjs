// Capturas de la demo de PERA ERP para su página del proyecto (proyecto/pera-erp/media).
// Necesita la vista local en marcha (node scripts/serve-local.mjs) y PERA con la demo cargada.
// Usa el Chrome instalado en el sistema. Guarda PNG; scripts/capture-pera.mjs no convierte.
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const BASE = (process.env.PERA_DEMO_URL || 'http://127.0.0.1:8010/proyecto/pera-erp/app').replace(/\/$/, '');
const OUT = resolve(process.cwd(), process.argv[2] || 'proyecto/pera-erp/media/raw');
mkdirSync(OUT, { recursive: true });
const only = process.env.ONLY ? process.env.ONLY.split(',') : null;
const wanted = (name) => !only || only.includes(name);

const browser = await chromium.launch({ channel: 'chrome' });
const HIDE_BANNER = '.demo-banner { display: none !important; } *, *::before, *::after { caret-color: transparent !important; }';

async function page(viewport, scale) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: scale, locale: 'es-ES', colorScheme: 'light', isMobile: viewport.width < 600, hasTouch: viewport.width < 600 });
  const tab = await context.newPage();
  await tab.goto(`${BASE}/`);
  await tab.evaluate(() => localStorage.removeItem('pera.sidebar.width'));
  return tab;
}

async function open(tab, path, settle = 1800) {
  await tab.goto(`${BASE}${path}`);
  await tab.addStyleTag({ content: HIDE_BANNER });
  await tab.waitForLoadState('networkidle').catch(() => undefined);
  await tab.waitForTimeout(settle);
}

const desktop = await page({ width: 1440, height: 900 }, 1.5);
const shots = [
  ['resumen', '/'], ['ventas', '/ventas'], ['presupuestos', '/presupuestos'], ['cartera', '/cartera'],
  ['contabilidad', '/contabilidad'], ['almacen', '/almacen'], ['clientes', '/clientes'], ['comisiones', '/comisiones'],
  ['agenda', '/agenda'], ['verifactu', '/verifactu'], ['ventas-tpv', '/ventas-tpv'], ['compras', '/compras'],
];
for (const [name, path] of shots) {
  if (!wanted(name)) continue;
  await open(desktop, path);
  await desktop.screenshot({ path: resolve(OUT, `${name}.png`) });
  console.log('·', name);
}

if (wanted('factura')) {
  // Factura con su bloque Veri*Factu: la última expedida.
  await open(desktop, '/ventas');
  const row = desktop.locator('tr.clickable-row', { has: desktop.locator('.verifactu-list-mark') }).first();
  await row.click();
  await desktop.waitForTimeout(1800);
  await desktop.screenshot({ path: resolve(OUT, 'factura.png') });
  const block = desktop.locator('.verifactu-block').first();
  if (await block.count()) {
    await block.scrollIntoViewIfNeeded();
    await desktop.waitForTimeout(600);
    await block.screenshot({ path: resolve(OUT, 'verifactu-bloque.png') });
    await desktop.screenshot({ path: resolve(OUT, 'factura-verifactu.png') });
  }
  console.log('· factura');
}

if (wanted('albaran')) {
  await open(desktop, '/ventas');
  await desktop.locator('tr.clickable-row', { hasText: 'ALB-' }).first().click();
  await desktop.waitForTimeout(1500);
  await desktop.screenshot({ path: resolve(OUT, 'albaran.png') });
  console.log('· albaran');
}

if (wanted('tpv')) {
  await open(desktop, '/tpv');
  await desktop.screenshot({ path: resolve(OUT, 'tpv-cajas.png') });
  const register = desktop.getByText('Caja 1 (mostrador)').first();
  if (await register.count()) { await register.click(); await desktop.waitForTimeout(1800); }
  // Unos artículos en el ticket, como si se hubieran escaneado.
  const search = desktop.locator('input[type="search"], input[inputmode="search"], .pos-search input, input').first();
  for (const code of ['2000000050010', '2000000050287', '2000000050331']) {
    try { await search.fill(code); await search.press('Enter'); await desktop.waitForTimeout(500); } catch { /* sin buscador */ }
  }
  await desktop.waitForTimeout(800);
  await desktop.screenshot({ path: resolve(OUT, 'tpv.png') });
  console.log('· tpv');
}

if (wanted('movil')) {
  const phone = await page({ width: 390, height: 844 }, 3);
  await open(phone, '/almacen-movil', 2200);
  await phone.screenshot({ path: resolve(OUT, 'almacen-movil.png') });
  console.log('· almacen-movil');
}

await browser.close();
