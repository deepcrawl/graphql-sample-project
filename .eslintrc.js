module.exports = {
  env: {
    node: true,
  },
  extends: ["./node_modules/deepcrawl-eslint-config/index.js"],
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.integration.ts"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/require-await": "off",
        "clean-code/feature-envy": "off",
        "sonarjs/cognitive-complexity": "off",
        "sonarjs/no-duplicate-string": "off",
        "sonarjs/no-identical-functions": "off",
        "max-classes-per-file": "off",
        "max-lines-per-function": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  root: true,
  rules: {
    "import/no-relative-parent-imports": ["off"],
  },
};
