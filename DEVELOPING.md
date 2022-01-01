# Developing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [How do I setup the project for development?](#how-do-i-setup-the-project-for-development)
- [What's the development workflow?](#whats-the-development-workflow)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How do I setup the project for development?

1. If you don't have write access to this repo, [fork it](https://github.com/iamturns/create-exposed-app/fork)
2. Clone the repo
3. Install dependencies: `npm ci`
4. Ensure everything is working: `npm run validate`
5. Use VS Code? Run command `Extensions: Show Recommended Extensions` and install

## What's the development workflow?

1. Start develop mode: `npm run dev`
2. For TDD fans: `npm run dev--tdd`
3. Write code
4. Run `npm run manual-test`
5. Create a [pull request on GitHub](https://github.com/iamturns/create-exposed-app/pulls)
6. Remove the temporary test directory `create-exposed-app-test-my-new-feature`
