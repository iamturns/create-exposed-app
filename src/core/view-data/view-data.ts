import { AppOptions } from "../types"
import { getGitHubRepoUrl } from "./github"
import { getMarkdownAuthor } from "./markdown-author"
import { getNpmAuthor } from "./npm-author"

export interface ViewData
  extends Record<string, string | undefined>,
    AppOptions {
  gitHubRepoUrl: string
  markdownAuthor: string
  npmAuthor: string
}

export const getViewData = (appOptions: AppOptions): ViewData => ({
  ...appOptions,
  gitHubRepoUrl: getGitHubRepoUrl(appOptions),
  markdownAuthor: getMarkdownAuthor(appOptions),
  npmAuthor: getNpmAuthor(appOptions),
})
