import { getMarkdownEmail, getMarkdownUrl } from "../../utils/markdown"
import { AppOptions } from "../types"

const getMarkdownAuthorLinksEmail = (email: string): string =>
  `<${getMarkdownEmail(email)}>`

const getMarkdownAuthorLinksWebsite = (website: string): string =>
  `(${getMarkdownUrl(website)})`

export const getMarkdownAuthor = (appOptions: AppOptions): string =>
  [
    appOptions.authorName,
    appOptions.authorEmail &&
      getMarkdownAuthorLinksEmail(appOptions.authorEmail),
    appOptions.authorWebsite &&
      getMarkdownAuthorLinksWebsite(appOptions.authorWebsite),
  ]
    .filter(Boolean)
    .join(" ")
