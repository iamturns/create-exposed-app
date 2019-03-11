# create-exposed-app-default-client-side-example

> Default client-side example of create-exposed-app

- Feature 1
- Feature 2

## Installation

This module is distributed via [npm](https://www.npmjs.com/) which is bundled with [Node.js](https://nodejs.org).

```bash
npm install create-exposed-app-default-client-side-example --save
```

OR

```bash
npm install create-exposed-app-default-client-side-example --save-dev
```

## Usage

```bash
npm start
```

### Roadmap

- Feature 1
- Feature 2

## Related

- [Project 1](https://example.com)
- [Project 2](https://example.com)

## Inspiration

- [Project 1](https://example.com)
- [Project 2](https://example.com)

## Credits

Authored and maintained by Bruce Wayne <[bruce.wayne@gmail.com](mailto:bruce.wayne@gmail.com)> ([batman.com](https://batman.com))

To all [contributors](https://github.com/batman/create-exposed-app-default-client-side-example/graphs/contributors) (if you exist) - thank you!

## License

Open-source under [MIT License](https://github.com/batman/create-exposed-app-default-client-side-example/blob/master/LICENSE).

## FAQ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [General FAQ](#general-faq)
  - [Uh oh, something went wrong!](#uh-oh-something-went-wrong)
  - [I wish something was different…](#i-wish-something-was-different)
  - [Can I contribute code?](#can-i-contribute-code)
  - [My question isn't answered below :(](#my-question-isnt-answered-below-)
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

Sorry about that. Please submit a bug report using the [GitHub issue tracker](https://github.com/batman/create-exposed-app-default-client-side-example/issues).

### I wish something was different…

Keen to hear all ideas! Create an enhancement request using the [GitHub issue tracker](https://github.com/batman/create-exposed-app-default-client-side-example/issues).

### Can I contribute code?

Yes please! See the [Development FAQ](#development-faq) section.

### My question isn't answered below :(

Ask away using the [GitHub issue tracker](https://github.com/batman/create-exposed-app-default-client-side-example/issues).

## Development FAQ

> First time contributing code to an open-source project on GitHub? Check out this [free video tutorial](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

### How do I setup the project for development?

1. If you don't have write access to this repo, [fork it](https://github.com/batman/create-exposed-app-default-client-side-example/fork)
1. Clone the repo
1. Install dependencies: `npm ci`
1. Ensure everything is working: `npm run validate`
1. Use VS Code? Run command `Extensions: Show Recommended Extensions` and install

### What's the development workflow?

1. Start develop mode: `npm run dev`
1. For TDD fans: `npm run test:watch`
1. Write code
1. Create a [pull request on GitHub](https://github.com/batman/create-exposed-app-default-client-side-example/pulls)

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
