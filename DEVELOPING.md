# Developing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [How do I setup the project for development?](#how-do-i-setup-the-project-for-development)
- [What's the development workflow?](#whats-the-development-workflow)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How do I setup the project for development?

1. If you don't have write access to this repo, [fork it](https://github.com/iamturns/create-exposed-app/fork)
1. Clone the repo
1. Install dependencies: `npm ci`
1. Ensure everything is working: `npm run validate`
1. Use VS Code? Run command `Extensions: Show Recommended Extensions` and install

## What's the development workflow?

1. Create a system-wide link for use in other directories: `npm link`
1. Start develop mode: `npm run dev`
1. For TDD fans: `npm run test--tdd`
1. Write code
1. Create new temporary directory to test app population named `create-exposed-app-test-my-new-feature`
1. Run `npx create-exposed-app` in new directory

   Note: This should reference your local `create-exposed-app` copy, setup by previous linking command

1. Create a [pull request on GitHub](https://github.com/iamturns/create-exposed-app/pulls)
1. Remove the system-wide link: `npm unlink`
1. Remove the temporary test directory `create-exposed-app-test-my-new-feature`
