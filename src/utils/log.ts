import chalk from "chalk"
import debugCreator, { IDebugger } from "debug"

export const stdout = (...args: any[]) => console.log(...args) // eslint-disable-line no-console

export const stderr = (...args: any[]) => console.error(...args) // eslint-disable-line no-console

export const logError = (error: Error) => {
  const message = `${error.name}: ${error.message}`
  stderr(chalk.bold.red(message))

  if (error.stack) {
    // The first line contains the message (which we have already printed)
    const stackMessageRemoved = error.stack
      .split("\n")
      .slice(1)
      .join("\n")
    stderr(chalk.dim(stackMessageRemoved))
  }
}

// Alias for stdout
export const logMessage = (...args: any[]) => stdout(...args)

export const createLogDebug = (maybeFeatureName?: string): IDebugger => {
  const debugName = ["create-exposed-app", maybeFeatureName]
    .filter(Boolean)
    .join(":")
  return debugCreator(debugName)
}

export const logDebug = createLogDebug()
