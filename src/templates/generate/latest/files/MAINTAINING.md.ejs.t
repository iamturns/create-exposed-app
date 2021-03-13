---
to: MAINTAINING.md
---
# Maintaining

This guide is intended for maintainers (anybody with commit access).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Code of Conduct](#code-of-conduct)
- [Reviewing Pull Requests](#reviewing-pull-requests)
- [Approving Pull Requests](#approving-pull-requests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Code of Conduct

Please make sure you're familiar with and follow the [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Reviewing Pull Requests

Checklist:

1. Any decisions to capture as an ADR?
2. Any FAQs to update? E.g. README.md or DEVELOPING.md

## Approving Pull Requests

1. Use "Squash and Merge". This keeps a clean history in `master`, with a full history available in Pull Requests.
2. Ensure the merge message conforms to [Conventional Commits](https://conventionalcommits.org/) spec.
3. Breaking changes? Ensure the commit message contains the text `BREAKING CHANGE:`.
