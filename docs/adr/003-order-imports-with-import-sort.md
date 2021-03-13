# ADR-003: Order Imports With import-sort

- Status: Accepted
- People involved: @iamturns

## Issue

How should we order imports in JS and TS files?

## Candidates

- ESLint [sort-imports](https://eslint.org/docs/rules/sort-imports) rule
  - Unable to order by filename / location
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)
  - Used by [eslint-airbnb-config](https://www.npmjs.com/package/eslint-config-airbnb)
  - Does not work on TypeScript files
  - Does not allow sorting _within_ groups
- [import-sort](https://github.com/renke/import-sort)
  - Very powerful and feature rich

## Decision

Use [import-sort](https://github.com/renke/import-sort).
