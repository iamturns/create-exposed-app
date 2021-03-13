---
to: .github/workflows/super-linter.yml
---
name: Super-Linter

on: push

jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
        with:
          # Full git history is needed to get a proper list of changed files within `super-linter`
          fetch-depth: 0

      - name: Super-Linter
        uses: github/super-linter@v3
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} # Better reporting in PRs
          VALIDATE_ALL_CODEBASE: false # Only validate changed files
          VALIDATE_JAVASCRIPT_ES: false # Already taken care of by existing lint command
          VALIDATE_JAVASCRIPT_STANDARD: false # Already taken care of by existing lint command
          VALIDATE_JSX: false # Already taken care of by existing lint command
          VALIDATE_TYPESCRIPT_ES: false # Already taken care of by existing lint command
          VALIDATE_TYPESCRIPT_STANDARD: false # Already taken care of by existing lint command
          VALIDATE_TSX: false # Already taken care of by existing lint command
          VALIDATE_MARKDOWN: false # Already taken care of by existing lint command
          VALIDATE_JSON: false # JSON linter is unable to parse JSON comments. Formatting with Prettier will catch JSON errors.
