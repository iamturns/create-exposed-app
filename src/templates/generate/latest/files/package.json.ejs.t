---
to: package.json
---
{
  "name": "<%- npmPackageName %>",
  "version": "2.0.0",
  "description": "<%- oneLiner %>",
  "homepage": "https://github.com/<%- authorGithub %>/<%- packageName %>",
  "bugs": {
    "url": "https://github.com/<%- authorGithub %>/<%- packageName %>/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/<%- authorGithub %>/<%- packageName %>.git"
  },
  "license": "MIT",
  "author": "<%- authorName %> <<%- authorEmail %>> (<%- authorWebsite %>)",
  "exports": {
    "require": "./dist/index.js",
    "import": "./dist/index.esm.js"
  },
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "typings": "dist/index.d.ts",
  "scripts": {
    "dev": "npm run build-js--cjs--watch",
    "dev-tdd": "npm run test--watch",
    "format": "bash bin/format.sh",
    "lint": "run-p lint-es lint-ts lint-md",
    "lint-es": "eslint --ext .js,.jsx,.ts,.tsx --format=pretty ./",
    "lint-ts": "tsc --noEmit",
    "lint-md": "markdownlint '**/*.md'",
    "test": "jest",
    "test--coverage": "npm run test -- --coverage",
    "test--watch": "npm run test -- --watch",
    "build": "rimraf dist && run-p build-js build-dts",
    "build--watch": "run-p build-js--cjs--watch build-dts--watch",
    "build-js": "run-s build-js--cjs build-js--esm",
    "build-js--cjs": "node bin/build.js",
    "build-js--cjs--watch": "node bin/build.js --watch",
    "build-js--esm": "gen-esm-wrapper dist/index.js dist/index.esm.js",
    "build-dts": "tsc --emitDeclarationOnly",
    "build-dts--watch": "npm run build-dts -- --watch --preserveWatchOutput",
    "validate": "run-p --print-label lint test build"
  },
  "dependencies": {
    "debug": "4.3.1",
    "dotenv": "8.2.0"
  },
  "devDependencies": {
    "@babel/core": "7.13.10",
    "@babel/preset-env": "7.13.10",
    "@babel/preset-typescript": "7.13.0",
    "@types/debug": "4.1.5",
    "@types/jest": "26.0.20",
    "@typescript-eslint/eslint-plugin": "4.17.0",
    "babel-jest": "26.6.3",
    "doctoc": "2.0.0",
    "esbuild": "0.9.2",
    "eslint": "7.22.0",
    "eslint-config-airbnb-typescript": "12.3.1",
    "eslint-config-prettier": "8.1.0",
    "eslint-formatter-pretty": "4.0.0",
    "eslint-plugin-eslint-comments": "3.2.0",
    "eslint-plugin-import": "2.22.1",
    "eslint-plugin-jest": "24.2.1",
    "eslint-plugin-jsx-a11y": "6.4.1",
    "eslint-plugin-promise": "4.3.1",
    "eslint-plugin-react": "7.22.0",
    "eslint-plugin-unicorn": "28.0.2",
    "gen-esm-wrapper": "1.1.1",
    "import-sort-cli": "6.0.0",
    "import-sort-parser-babylon": "6.0.0",
    "import-sort-parser-typescript": "6.0.0",
    "import-sort-style-module": "6.0.0",
    "jest": "26.6.3",
    "markdownlint-cli": "0.27.1",
    "npm-run-all": "4.1.5",
    "prettier": "2.2.1",
    "rimraf": "3.0.2",
    "sort-package-json": "1.49.0",
    "typescript": "4.2.3"
  }
}
