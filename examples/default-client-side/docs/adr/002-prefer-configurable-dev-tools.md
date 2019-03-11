# ADR-002: Prefer Configurable Dev Tools

- Status: Acceepted
- People involved: @batman

## Issue

> Dev tools = building, linting, formatting, etc.

Should dev tools be configurable?

## Candidates

There are two sides of the spectrum, and both are explored below.

### Candidate: Fixed dev tools scripts with minimal (or no) config

An example is running `react-scripts build`, which does not support configuration.

Pros:

- Simplicity
- Prevent developer arguments about config and script behaviour
- Easier to sync consistent dev tooling across many repos

Cons:

- Unable (or difficult) to tweak and configure

### Candidate: Exposed dev tools scripts with full configuration

An example is a `build.js` command (or similar), exposing all steps and allowing configuration.

Pros:

- Easy to tweak and configure

Cons:

- More complex
- Developers may argue about best configuration
  - However, following this rule helps: "stick to default behaviour unless you have a clear and objective reason to change it"
- More difficult to sync consistent dev tooling across many repos
  - However, it is still possible using git. Copy and paste from another repo (or regenerate scaffolding) over your existing app. Then manually choose to keep or discard each change. This is manual and time consuming, but allows for greater control.

## Decision

Exposed dev tools scripts with full configuration.

The decision carries more 'cons', but the ability to easily tweak and configure an app is most important. Each app is unique with different requirements. It's frustrating to be locked into unconfigurable fixed scripts, despite all the 'pros'.
