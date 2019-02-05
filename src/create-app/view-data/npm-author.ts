import { SetupAnswers } from "../ask"

export const getNpmAuthor = (setupAnswers: SetupAnswers): string =>
  [
    setupAnswers.authorName,
    setupAnswers.authorEmail && `<${setupAnswers.authorEmail}>`,
    setupAnswers.authorWebsite && `(${setupAnswers.authorWebsite})`,
  ]
    .filter(Boolean)
    .join(" ")
