import { getFriendlyUrl } from "./url"

export function getMarkdownTextUrl(text: string, url: string): string {
  return `[${text}](${url})`
}

export function getMarkdownUrl(url: string): string {
  return getMarkdownTextUrl(getFriendlyUrl(url), url)
}

export function getMarkdownEmail(email: string): string {
  return getMarkdownTextUrl(email, `mailto:${email}`)
}
