module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
}
