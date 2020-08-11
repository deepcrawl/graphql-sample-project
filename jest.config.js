module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/app.ts",
    "!<rootDir>/src/index.ts",
    "!<rootDir>/src/@types/**/*",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["html", "json", "text-summary"],
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  setupFiles: ["reflect-metadata"],
  setupFilesAfterEnv: ["jest-extended"],
  testEnvironment: "node",
  testMatch: ["<rootDir>/src/**/*.integration.ts", "<rootDir>/src/**/*.test.ts"],
};
