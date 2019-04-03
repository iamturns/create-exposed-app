import { AppOptions } from "../options"

export function getNpmAuthor(appOptions: AppOptions): string {
  return [
    appOptions.authorName,
    appOptions.authorEmail && `<${appOptions.authorEmail}>`,
    appOptions.authorWebsite && `(${appOptions.authorWebsite})`,
  ]
    .filter(Boolean)
    .join(" ")
}
