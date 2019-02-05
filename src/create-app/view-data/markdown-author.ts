import { getMarkdownEmail, getMarkdownUrl } from "../../utils/markdown"
import { SetupAnswers } from "../ask"

const getMarkdownAuthorLinksEmail = (email: string): string =>
  `<${getMarkdownEmail(email)}>`

const getMarkdownAuthorLinksWebsite = (website: string): string =>
  `(${getMarkdownUrl(website)})`

export const getMarkdownAuthor = (setupAnswers: SetupAnswers): string =>
  [
    setupAnswers.authorName,
    setupAnswers.authorEmail &&
      getMarkdownAuthorLinksEmail(setupAnswers.authorEmail),
    setupAnswers.authorWebsite &&
      getMarkdownAuthorLinksWebsite(setupAnswers.authorWebsite),
  ]
    .filter(Boolean)
    .join(" ")
