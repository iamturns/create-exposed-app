import { AppOptions } from "../types"

export const getGitHubRepoUrl = (appOptions: AppOptions): string =>
  `https://github.com/${appOptions.authorGitHub}/${
    appOptions.projectPackageName
  }`
