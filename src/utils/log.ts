const chalk = require("chalk")

const logPrefix = chalk.magenta("[create-exposed-app]")
const errorPrefix = chalk.red("[ERROR]")

// eslint-disable-next-line no-console
export const logMessage = (...args: any[]) => console.log(logPrefix, ...args)

export const logError = (...args: any[]) => logMessage(errorPrefix, ...args)
