module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // @see https://typescript-eslint.io/docs/linting/configs
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: [
      /* main tsconfig */ "./tsconfig.json",
      /* test tsconfig */ "./test/tsconfig.json",
    ],
  },
  ignorePatterns: [
    ".eslintrc.js",
    "test/tsconfig.json",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "double"],
  },
};
