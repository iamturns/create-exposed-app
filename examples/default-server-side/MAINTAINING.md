# Maintaining

This guide is intended for maintainers (anybody with commit access).

## Code of Conduct

Please make sure you're familiar with and follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Reviewing Pull Requests

1. Ensure all checklist items are completed.
1. Ensure any architectual decisions are captured in /docs/adr.

## Approving Pull Requests

1. Use "Squash and Merge". This keeps a clean history in `master`, with a full history available in Pull Requests.
1. Ensure the merge message conforms to [Conventional Commits](https://conventionalcommits.org/) spec.
1. Breaking changes? Ensure the commit message contains the text `BREAKING CHANGE:`.

## Releasing

Releasing is handled automatically when merging to `master`, powered by [CircleCI](https://circleci.com/) and [semantic-release](https://github.com/semantic-release/semantic-release).
