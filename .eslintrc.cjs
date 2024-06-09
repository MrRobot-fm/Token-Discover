module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "google",
    "prettier",
  ],
  ignorePatterns: [
    ".next",
    "commitlint.config.*",
    "next-env.d.ts",
    "node_modules",
    "package-lock.json",
    "public",
    "src/api/**/*",
    "yarn.lock",
  ],
  overrides: [],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks", "@tanstack/query"],
  rules: {
    "require-jsdoc": 0,
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@tanstack/query/exhaustive-deps": "error",
    camelcase: "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
};
