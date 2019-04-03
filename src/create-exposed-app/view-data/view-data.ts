import { AppOptions } from "../options"
import { getGitHubRepoUrl } from "./github"
import { getMarkdownAuthor } from "./markdown-author"
import { getNpmAuthor } from "./npm-author"

export interface ViewData extends AppOptions {
  gitHubRepoUrl: string
  markdownAuthor: string
  npmAuthor: string
}

export function getViewData(options: AppOptions): ViewData {
  return {
    ...options,
    gitHubRepoUrl: getGitHubRepoUrl(options),
    markdownAuthor: getMarkdownAuthor(options),
    npmAuthor: getNpmAuthor(options),
  }
}
