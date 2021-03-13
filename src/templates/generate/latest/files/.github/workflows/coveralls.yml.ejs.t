---
to: .github/workflows/coveralls.yml
---
name: Coveralls

on:
  # Run on master changes to track test coverage over time
  push:
    branches:
      - "master"
  # Leave a PR comment to surface test coverage changes
  pull_request: ~

jobs:
  main:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 14.x

      - name: Install deps
        run: npm ci

      - name: Run tests and generate coverage report
        run: npm run test--coverage

      - name: Coveralls
        uses: coverallsapp/github-action@master
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
