const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  default: createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  env: {
    ...process.env,
    numTestsKeptInMemory: 0,
  },
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  experimentalMemoryManagement: true,
  e2e: {
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "cypress/suport/reporter-config.json",
    },
    baseUrl: process.env.BASE_URL || "https://demo.automationtesting.in",
    specPattern: "**/*.feature",
    stepDefinitions: "cypress/support/step_definitions/*.js",
    supportFile: "cypress/support/e2e.js",
    defaultBrowser: process.env.CYPRESS_BROWSER || "chrome",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    video: false,
    viewportWidth: +process.env.VIEWPORT_WIDTH || 1440,
    viewportHeight: +process.env.VIEWPORT_HEIGHT || 720,
    setupNodeEvents,
    retries: { runMode: 1, openMode: 0 },
  },
});
