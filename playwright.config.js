import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './e2e',
  timeout: 180000,
  expect: { timeout: 120000 },
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:8000', headless: true, trace: 'retain-on-failure',
    ...(process.platform === 'win32' ? { channel: 'msedge' } : {}) },
  webServer: { command: 'node scripts/serve-tune.mjs', url: 'http://127.0.0.1:8000', reuseExistingServer: false },
});
