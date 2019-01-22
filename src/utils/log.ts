const chalk = require("chalk")

const errorPrefix = chalk.red("[ERROR]")

// eslint-disable-next-line no-console
export const logMessage = (...args: any[]) => console.log(...args)

export const logError = (...args: any[]) => logMessage(errorPrefix, ...args)
