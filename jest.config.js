module.exports = {
  testEnvironment: "jsdom",   // Browser-like environment for React
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Next.js alias support
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      tsconfig: {
        jsx: "react-jsx",
      },
    }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: [
    "**/*.test.(ts|tsx|js|jsx)",
    "**/__tests__/**/*.(ts|tsx|js|jsx)"
  ],
};
