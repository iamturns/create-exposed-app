module.exports = {
  extends: ["iamturns"],
  plugins: ["typescript"],
  parser: "typescript-eslint-parser",
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".json", ".ts", ".tsx"],
      },
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
  },
  rules: {
    // Include .ts and .tsx files
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*{.,_}{test,spec}.{js,jsx,ts,tsx}"] },
    ],
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/no-default-export": "error",
    // https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/no-unused-vars.md
    "no-unused-vars": "error",
    "typescript/no-unused-vars": "error",
  },
}
