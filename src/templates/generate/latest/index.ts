/**
 * This file is read by the `hygen` library.
 */

// Ignore this file from unit tests. It should be tested by an end-to-end test instead.
/* istanbul ignore file */

import enquirer from "enquirer";

import { getNpmPackageName } from "../../../template-variables";

const prompts = [
  {
    type: "input",
    name: "packageName",
    message: "Package name (e.g. my-awesome-project)",
  },
  {
    type: "input",
    name: "npmScope",
    message: "NPM package scope (optional) (e.g. @batman)",
  },
  {
    type: "input",
    name: "oneLiner",
    message: "One-liner (e.g. Does awesome stuff)",
  },
  {
    type: "input",
    name: "authorName",
    message: "Author name (e.g. Bruce Wayne)",
  },
  {
    type: "input",
    name: "authorEmail",
    message: "Author email (e.g. bruce.wayne@gmail.com)",
  },
  {
    type: "input",
    name: "authorGithub",
    message: "Author GitHub username",
  },
  {
    type: "input",
    name: "authorTwitter",
    message: "Author Twitter username (e.g. TheRealBatman)",
  },
  {
    type: "input",
    name: "authorWebsite",
    message: "Author website (e.g. https://batman.com)",
  },
];

export const prompt = async ({
  prompter,
}: {
  prompter: enquirer;
}): Promise<Record<string, unknown>> => {
  const answers = await prompter.prompt(prompts);
  return {
    ...answers,
    npmPackageName: getNpmPackageName(answers),
  };
};
