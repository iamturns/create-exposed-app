export const getFriendlyUrl = (url: string): string =>
  url.replace(/^https?:\/\//, "")
