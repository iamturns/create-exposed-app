---
to: .github/workflows/push-master.yml
---
name: Master workflow

on:
  push:
    branches:
      - master

jobs:
  main:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2
        with:
          # Entire history is required for commitlint action
          fetch-depth: 0

      # Commits in master must be semver for "Release Please"
      - name: Lint commits
        uses: wagoid/commitlint-github-action@v4

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: 14.x
          registry-url: "https://registry.npmjs.org"

      - name: Install deps
        run: npm ci

      - name: Validate
        run: npm run validate

      # This action will usually create (or update) a "release" PR, containing a version bump and changelog updates
      - uses: GoogleCloudPlatform/release-please-action@v3
        id: release
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          release-type: node
          pull-request-title-pattern: "chore: release ${version}"

      # If the above action creates a GitHub release, then also publish to npm
      # This must be attached to this workflow, as one workflow cannot trigger another (e.g. on release create)
      - name: Publish to npm
        if: ${{ steps.release.outputs.release_created }}
        # Public access required because scoped packages (@example/lib) are private by default
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
