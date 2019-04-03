# create-exposed-app

[![Active](https://img.shields.io/badge/active-yes-green.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/graphs/commit-activity) [![Version](https://img.shields.io/npm/v/create-exposed-app.svg?style=flat-square)](https://www.npmjs.com/package/create-exposed-app?activeTab=versions) [![Downloads](https://img.shields.io/npm/dt/create-exposed-app.svg?style=flat-square)](https://www.npmjs.com/package/create-exposed-app) [![Build](https://img.shields.io/circleci/project/github/iamturns/create-exposed-app/master.svg?style=flat-square)](https://circleci.com/gh/iamturns/create-exposed-app) [![License](https://img.shields.io/github/license/iamturns/create-exposed-app.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app#can-i-contribute-code) [![Code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/iamturns/create-exposed-app/blob/master/CODE_OF_CONDUCT.md)

> App generator with everything exposed for maximum control (powered by TS, Babel, Jest, ESLint, Prettier, CircleCI, and more)

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

- :wrench: [TypeScript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/), [Jest](https://jestjs.io/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), and more
  - Configured with sensible defaults
  - All optional and tweakable
- :rocket: CI/CD
  - Automatic validation in pull requests, powered by [CircleCI](https://circleci.com/)
  - Automatic versioning and release to NPM after merging to `master`, powered by [semantic-release](https://github.com/semantic-release/semantic-release)
- :book: Documentation templates
  - README.md, CHANGELOG.md, CODE_OF_CONDUCT.md, MAINTAINING.md, and LICENSE
  - [GitHub templates](https://help.github.com/articles/about-issue-and-pull-request-templates/) for pull requests, bug reports, change requests, questions, and general issues.
  - [Architectural Decision Records](https://adr.github.io/)
- :tada: More!
  - Automatically format and test changed files, powered by [lint-staged](https://github.com/okonet/lint-staged)
  - VS Code settings

## Examples

- [default-client-side](https://github.com/iamturns/create-exposed-app/tree/master/examples/default-client-side)
- [default-server-side](https://github.com/iamturns/create-exposed-app/tree/master/examples/default-server-side)

## Usage

Run the following command and follow the prompts:

```bash
npm init exposed-app
```

You can also invoke the app with arguments. For example:

```bash
npx create-exposed-app \
  --project-package-name="my-awesome-project" \
  --project-overview="Does awesome stuff" \
  --side="server" \
  --author-name="Bruce Wayne" \
  --author-email="bruce.wayne@gmail.com" \
  --author-github="batman" \
  --author-website="https://batman.com"
```

Run `npx create-exposed-app --help` for details.

## Inspiration

- [create-react-app](https://github.com/facebook/create-react-app)
- [create-esm](https://github.com/standard-things/create-esm)
- [create-deck](https://github.com/jxnblk/mdx-deck/tree/master/create-deck)

## Credits

This project is authored and maintained by Matt Turnbull ([iamturns.com](https://iamturns.com) / [@iamturns](https://twitter.com/iamturns)).

Thank you to all [contributors](https://github.com/iamturns/create-exposed-app/graphs/contributors).

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

Keen to hear all ideas! Create an enhancement request using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).

### Can I contribute code?

Yes please! See [DEVELOPING.md](./DEVELOPING.md).

### My question isn't answered :(

Ask away using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).
