import { SetupAnswers } from "../ask"
import { getGitHubRepoUrl } from "./github"
import { getMarkdownAuthor } from "./markdown-author"
import { getNpmAuthor } from "./npm-author"

interface ViewDataExtra {
  gitHubRepoUrl: string
  markdownAuthor: string
  npmAuthor: string
}

export interface ViewData
  extends Record<string, string | undefined>,
    SetupAnswers,
    ViewDataExtra {}

export const getViewData = (setupAnswers: SetupAnswers): ViewData => ({
  ...setupAnswers,
  gitHubRepoUrl: getGitHubRepoUrl(setupAnswers),
  markdownAuthor: getMarkdownAuthor(setupAnswers),
  npmAuthor: getNpmAuthor(setupAnswers),
})
