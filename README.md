# create-exposed-app

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

- [General FAQ](#general-faq)
  - [Uh oh, something went wrong!](#uh-oh-something-went-wrong)
  - [I wish something was different…](#i-wish-something-was-different)
  - [Can I contribute code?](#can-i-contribute-code)
  - [My question isn't answered here :(](#my-question-isnt-answered-here-)
- [Development FAQ](#development-faq)
  - [How do I setup the project for development?](#how-do-i-setup-the-project-for-development)
  - [What's the development workflow?](#whats-the-development-workflow)
  - [Why do my files automatically change?](#why-do-my-files-automatically-change)
  - [I can't make a "Work in progress" commit because the build is broken](#i-cant-make-a-work-in-progress-commit-because-the-build-is-broken)
- [Miscellaneous FAQ](#miscellaneous-faq)
  - [Why are the dev tools scripts so verbose?](#why-are-the-dev-tools-scripts-so-verbose)
  - [Why are there so many config files?](#why-are-there-so-many-config-files)
  - [Why isn't the build bundled or minified?](#why-isnt-the-build-bundled-or-minified)
  - [Why does the Babel build script contain the `--source-maps` option?](#why-does-the-babel-build-script-contain-the---source-maps-option)
  - [Why does the `format:eslint` script ignore errors?](#why-does-the-formateslint-script-ignore-errors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## General FAQ

### Uh oh, something went wrong!

Sorry about that. Please submit a bug report using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).

### I wish something was different…

Keen to hear all ideas! Create an enhancement request using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).

### Can I contribute code?

Yes please! See the [Development FAQ](#development-faq) section.

### My question isn't answered here :(

Ask away using the [GitHub issue tracker](https://github.com/iamturns/create-exposed-app/issues).

## Development FAQ

> First time contributing code to an open-source project on GitHub? Check out this [free video tutorial](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

### How do I setup the project for development?

1. If you don't have write access to this repo, [fork it](https://github.com/iamturns/create-exposed-app/fork)
1. Clone the repo
1. Install dependencies: `npm ci`
1. Ensure everything is working: `npm run validate`
1. Use VS Code? Run command `Extensions: Show Recommended Extensions` and install

### What's the development workflow?

1. Create a system-wide link for use in other directories: `npm link`
1. Start develop mode: `npm run dev`
1. For TDD fans: `npm run test:watch`
1. Write code
1. Create new temporary directory to test app population named `create-exposed-app-test-my-new-feature`
1. Run `npx create-exposed-app` in new directory

   Note: This should reference your local `create-exposed-app` copy, setup by previous linking command

1. Create a [pull request on GitHub](https://github.com/iamturns/create-exposed-app/pulls)
1. Remove the system-wide link: `npm unlink`
1. Remove the temporary test directory `create-exposed-app-test-my-new-feature`

### Why do my files automatically change?

See [ADR-005: Format Files](docs/adr/005-format-files.md) and [ADR-006: Format Files Programmatically](docs/adr/006-format-files-programmatically.md).

### I can't make a "Work in progress" commit because the build is broken

Include the `--no-verify` option during the commit:

```bash
git commit -m "WIP" --no-verify
```

## Miscellaneous FAQ

### Why are the dev tools scripts so verbose?

See [ADR-002: Prefer Configurable Dev Tools](docs/adr/002-prefer-configurable-dev-tools.md).

### Why are there so many config files?

See [ADR-003: Prefer Multiple Config Files](docs/adr/003-prefer-multiple-config-files.md).

### Why isn't the build bundled or minified?

See [ADR-004: Minimally Transform Source Code During Build](docs/adr/004-minimally-transform-source-code-during-build.md).

### Why does the Babel build script contain the `--source-maps` option?

This option is available in the Babel config file (`sourceMaps: true`), but has diffrent behaviour. Only the command line supports the creation of `.map` files. See [https://github.com/babel/babel/issues/5261](https://github.com/babel/babel/issues/5261).

### Why does the `format:eslint` script ignore errors?

Linting errors should not be reported when formatting, that it was the `lint` command is for.

Errors are ignored by appending the following: `>/dev/null 2>&1 || true`.
