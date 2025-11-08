// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  testRunner_comment:
    "Take a look at https://stryker-mutator.io/docs/stryker-js/jest-runner for information about the jest plugin.",

  // ✅ Add this section to tell Stryker which files to mutate
  mutate: [
    "routes/**/*.js",
    "controllers/**/*.js",
    "models/**/*.js",
    "utils/**/*.js",
    "app.js"
  ],

  coverageAnalysis: "perTest",
};

export default config;
