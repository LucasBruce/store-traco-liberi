module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  coverageDirectory: "coverage/store-traco-liberi",
  testMatch: ["<rootDir>/tests/**/?(*.)(spec|test).{js,jsx,ts,tsx}"],
  collectCoverage: true,
};
