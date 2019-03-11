# ADR-006: Format Files Programmatically

- Status: Accepted
- People involved: @batman

## Issue

How should files be formatted?

## Candidates

### Candidate: Format files with IDE plugins

- Cons
  - Developers use different IDEs
  - Developers may forget to install plugins
  - Developers may configure plugins differently
  - Not all new and changed files are saved within an IDE

### Candidate: Format files programmatically

For example, a script named `format.js` which invokes formatting tools.

- Pros
  - Consistent for each developer
  - Nothing for the developer to install or manage
  - Allows a developer or build pipeline to run a single command to ensure files are formatted as expected
  - Can be automatically run on changed files using [lint-staged](https://github.com/okonet/lint-staged)

## Decision

Format files programmatically.
