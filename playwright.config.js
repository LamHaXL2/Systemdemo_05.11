const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  workers: 1,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8765",
    browserName: "chromium",
    headless: true,
  },
  webServer: {
    command: "python -m http.server 8765 --bind 127.0.0.1",
    url: "http://127.0.0.1:8765/frontend/",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
