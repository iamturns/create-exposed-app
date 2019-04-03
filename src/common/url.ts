export function getFriendlyUrl(url: string): string {
  return url.replace(/^https?:\/\//, "")
}
