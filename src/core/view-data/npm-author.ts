import { AppOptions } from "../types"

export const getNpmAuthor = (appOptions: AppOptions): string =>
  [
    appOptions.authorName,
    appOptions.authorEmail && `<${appOptions.authorEmail}>`,
    appOptions.authorWebsite && `(${appOptions.authorWebsite})`,
  ]
    .filter(Boolean)
    .join(" ")
