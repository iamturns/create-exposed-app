import { SetupAnswers } from "../ask"

export const getGitHubRepoUrl = (setupAnswers: SetupAnswers): string =>
  `https://github.com/${setupAnswers.authorGitHub}/${
    setupAnswers.projectPackageName
  }`
