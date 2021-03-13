---
to: docs/adr/002-prefer-multiple-config-files.md
---
# ADR-002: Prefer Multiple Config Files

- Status: Accepted
- People involved: @<%- authorGithub %>

## Issue

Configuration can be stored within `package.json`, or as multiple files. Which is the best choice?

## Decision

Prefer multiple config files.

- Storing configuration files with `.js` extension allows for additional features, e.g. comments, merging, computing based on environment
- Reduce git conflicts within `package.json`
- Easier to sync with other projects (by simply copying the configuration file)
- Storing with extensions (e.g. `.js`, `.yml`, `.json`) provides syntax highlighting
- Easier to find the configuration
- Easier for IDE and other tools to discover
- Improved separation of concerns
