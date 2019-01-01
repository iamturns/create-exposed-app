# Developing

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Setup](#setup)
- [Workflow](#workflow)
- [Architectural Decision Records](#architectural-decision-records)
  - [Discover ADRs](#discover-adrs)
  - [Create a new ADR](#create-a-new-adr)
  - [Remove an ADR](#remove-an-adr)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setup

1. Fork the repo
1. Install dependencies: `npm install`
1. Ensure everything is working: `npm run validate`

## Workflow

1. Create your feature branch: `git checkout -b my-new-feature`
1. Create a global link: `npm link`
1. Create new directory to test app population: `mkdir create-iamturns-app-test-my-new-feature`
1. Write code
1. Run `npm init iamturns-app` in `create-iamturns-app-test-my-new-feature`
1. Once complete, submit a [pull request on GitHub](https://github.com/iamturns/create-iamturns-app/pulls).

## Architectural Decision Records

An [Architectural Decision (AD)](https://en.wikipedia.org/wiki/Architectural_decision) is a design decision that addresses [Architecturally Significant Requirements (ASR)](https://en.wikipedia.org/wiki/Architecturally_significant_requirements). An AD is hard to make and/or costly to change.

An [Architectural Decision Record (ADR)](https://adr.github.io/) is a document that captures the AD, along with research, consequences, etc.

### Discover ADRs

ADRs are listed in [/doc/adr](/doc/adr).

### Create a new ADR

Copy `doc/adr/.ADR-000-template.md` into a new file, and increase the number sequence.

### Remove an ADR

ADRs should not be removed. Instead they can be rejected, deprecated, or superseded with a new ADR. See the 'Status' field in the template file.
