import { AppOptions } from "../options"

export function getGitHubRepoUrl(appOptions: AppOptions): string {
  return `https://github.com/${appOptions.authorGitHub}/${
    appOptions.projectPackageName
  }`
}
