# Developing

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
  - [How do I setup the the project?](#how-do-i-setup-the-the-project)
  - [What's the workflow?](#whats-the-workflow)
- [ADRs](#adrs)
  - [What's an ADR?](#whats-an-adr)
  - [What's an AD?](#whats-an-ad)
  - [Where are the ADRs?](#where-are-the-adrs)
  - [How do I create a new ADR?](#how-do-i-create-a-new-adr)
  - [How do I remove an ADR?](#how-do-i-remove-an-adr)
- [Misc](#misc)
  - [Why does the Babel build script contain the `--source-maps` option?](#why-does-the-babel-build-script-contain-the---source-maps-option)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

### How do I setup the the project?

1. Fork the repo
1. Install dependencies: `npm install`
1. Ensure everything is working: `npm run validate`

### What's the workflow?

1. Create your feature branch: `git checkout -b my-new-feature`
1. Create a global link: `npm link`
1. Create new directory to test app population: `mkdir create-exposed-app-test-my-new-feature`
1. Write code
1. Run `npm init exposed-app` in `create-exposed-app-test-my-new-feature`
1. Once complete, submit a [pull request on GitHub](https://github.com/iamturns/create-exposed-app/pulls).

## ADRs

### What's an ADR?

An [Architectural Decision Record](https://adr.github.io/) is a document that captures an AD with research and outcomes.

### What's an AD?

An [Architectural Decision](https://en.wikipedia.org/wiki/Architectural_decision) is a design decision that is hard to make and/or costly to change.

### Where are the ADRs?

ADRs are listed in [/docs/adr](/docs/adr).

### How do I create a new ADR?

Copy `docs/adr/.000-template.md` into a new file, and increase the number sequence.

### How do I remove an ADR?

ADRs should not be removed. Instead they can be rejected, deprecated, or superseded with a new ADR. See the 'Status' field in the template file.

## Misc

### Why does the Babel build script contain the `--source-maps` option?

This option is available in the Babel config file (`sourceMaps: true`), but has diffrent behaviour. Only the command line supports the creation of `.map` files. See [https://github.com/babel/babel/issues/5261](https://github.com/babel/babel/issues/5261).
