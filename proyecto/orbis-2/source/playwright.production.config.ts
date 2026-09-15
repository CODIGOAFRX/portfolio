import { defineConfig } from "@playwright/test";
import config from "./playwright.config";
export default defineConfig({
  ...config,
  use: { ...config.use, baseURL: "http://127.0.0.1:4175/proyecto/orbis-2/" },
  webServer: {
    command: "node tests/preview-portfolio.mjs",
    url: "http://127.0.0.1:4175/proyecto/orbis-2/",
    reuseExistingServer: false,
  },
});
