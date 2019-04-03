module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  testURL: "http://localhost",
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
}
