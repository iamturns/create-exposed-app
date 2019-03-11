# ADR-004: Minimally Transform Source Code During Build

- Status: Accepted
- People involved: @iamturns

## Issue

There are many ways to transform the source code during build, including:

- Bundle into a single file
- Minify

What transformations should the build use?

## Assumptions

The code is not consumed on client-side.

## Constraints

As the code is written in TypeScript, there must be _some_ transformation (e.g. ESM to CJS).

## Decision

Minimally transform the source code during build.

Has the following advantages:

- Easier to debug and trace problems to a specific file (even with source maps)
- Allows the consumer to `require` only the file(s) they need within the directory tree
