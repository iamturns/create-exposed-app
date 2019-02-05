import { getFriendlyUrl } from "./url"

export const getMarkdownTextUrl = (text: string, url: string): string =>
  `[${text}](${url})`

export const getMarkdownUrl = (url: string): string =>
  getMarkdownTextUrl(getFriendlyUrl(url), url)

export const getMarkdownEmail = (email: string): string =>
  getMarkdownTextUrl(email, `mailto:${email}`)
