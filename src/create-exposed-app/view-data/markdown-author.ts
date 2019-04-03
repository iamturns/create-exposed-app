import { getMarkdownEmail, getMarkdownUrl } from "../../common/markdown"
import { AppOptions } from "../options"

export function getMarkdownAuthor(appOptions: AppOptions): string {
  return [
    appOptions.authorName,
    appOptions.authorEmail &&
      getMarkdownAuthorLinksEmail(appOptions.authorEmail),
    appOptions.authorWebsite &&
      getMarkdownAuthorLinksWebsite(appOptions.authorWebsite),
  ]
    .filter(Boolean)
    .join(" ")
}

function getMarkdownAuthorLinksEmail(email: string): string {
  return `<${getMarkdownEmail(email)}>`
}

function getMarkdownAuthorLinksWebsite(website: string): string {
  return `(${getMarkdownUrl(website)})`
}
