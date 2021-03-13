# create-exposed-app

[![Version](https://img.shields.io/npm/v/create-exposed-app.svg?style=flat-square)](https://www.npmjs.com/package/create-exposed-app?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/create-exposed-app.svg?style=flat-square)](https://www.npmjs.com/package/create-exposed-app) [![Last commit](https://img.shields.io/github/last-commit/iamturns/create-exposed-app.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/graphs/commit-activity) [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fiamturns%2create-exposed-app%2Fbadge%3Fref%3Dmaster&style=flat&label=build&logo=false)](https://actions-badge.atrox.dev/iamturns/create-exposed-app/goto?ref=master) [![Coverage Status](https://coveralls.io/repos/github/iamturns/create-exposed-app/badge.svg?branch=master)](https://coveralls.io/github/iamturns/create-exposed-app?branch=master) [![License](https://img.shields.io/github/license/iamturns/create-exposed-app.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app#can-i-contribute-code) [![Code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/blob/master/CODE_OF_CONDUCT.md)

> App generator with everything exposed for maximum control (powered by TypeScript, ESBuild, Jest, ESLint, GitHub Actions, Prettier, and more)

---

Like zero-config? Get out!

Generate a flexible starting point for your app, where config files and scripts are in-your-face and ready to adapt to your needs.

_Because every app is unique._

Go for it:

```bash
npm init exposed-app
```

![command demo](docs/assets/demo-command.gif)

## What's included?

- 🏆 Powered by the usual suspects: [TypeScript](https://www.npmjs.com/package/debug), [Jest](https://jestjs.io), [ESLint](https://eslint.org)
- 📦 TS → JS, powered by [esbuild](https://github.com/evanw/esbuild)
  - It's so fast! With tree shaking too
  - Outputs CJS, ESM, and `d.ts` files
- 🚀 CI/CD, powered by [GitHub Actions](https://github.com/features/actions)
  - Publishing, versioning, and changelog generation, powered by [Release Please](https://github.com/googleapis/release-please)
  - Automatically format code, and commit changes back to the repo
  - PRs display a code coverage report, powered by [Coveralls](https://coveralls.io)
  - Lint a bunch of stuff without installing anything locally, powered by [Super-Linter](https://github.com/github/super-linter)
- 🎀 Format code, powered by [Prettier](http://prettier.io), [EditorConfig](https://editorconfig.org), [import-sort](https://github.com/renke/import-sort), [sort-package-json](https://github.com/keithamus/sort-package-json), [doctoc](https://github.com/thlorenz/doctoc)
- 📚 Documentation templates
  - README.md, CHANGELOG.md, CODE_OF_CONDUCT.md, DEVELOPING.md, MAINTAINING.md, and LICENSE
  - [GitHub templates](https://help.github.com/articles/about-issue-and-pull-request-templates/) for PRs and issues
  - [Architectural Decision Records](https://adr.github.io/)
- 🎉 More!
  - VS Code recommended extensions
  - Bootstrap with some classics: [dotenv](https://www.npmjs.com/package/dotenv), [debug](https://www.npmjs.com/package/debug)

## Setup

```bash
npm install @iamturns/create-exposed-app
```

## Usage

Run the following command and follow the prompts:

```bash
npm init exposed-app
```

You can also invoke the app with arguments. For example:

```bash
npx create-exposed-app \
  --packageName="my-awesome-project" \
  --oneLiner="Does awesome stuff" \
  --authorName="Bruce Wayne" \
  --authorEmail="bruce.wayne@gmail.com" \
  --authorGithub="batman" \
  --authorTwitter="TheRealBatman" \
  --authorWebsite="https://batman.com"
```

## Credits

This project is authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns)).

A big thank you to all [contributors](https://github.com/iamturns/create-exposed-app/graphs/contributors) 🏆

## License

Open-source under [MIT License](https://github.com/iamturns/create-exposed-app/blob/master/LICENSE).

## FAQ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Uh oh, something went wrong!](#uh-oh-something-went-wrong)
- [I wish something was different…](#i-wish-something-was-different)
- [Can I contribute code?](#can-i-contribute-code)
- [My question isn't answered :(](#my-question-isnt-answered-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### Uh oh, something went wrong!

Sorry about that. Please submit a bug report using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).

### I wish something was different…

Keen to hear all ideas in [GitHub discussions](https://github.com/iamturns/create-exposed-app/discussions).

### Can I contribute code?

Yes please! See [DEVELOPING.md](./DEVELOPING.md).

### My question isn't answered :(

Ask away in [GitHub discussions](https://github.com/iamturns/create-exposed-app/discussions).
