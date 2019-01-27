import chalk from "chalk"
import debugCreator, { IDebugger } from "debug"

export const stdout = (...args: any[]): void => console.log(...args) // eslint-disable-line no-console, @typescript-eslint/no-explicit-any

export const stderr = (...args: any[]): void => console.error(...args) // eslint-disable-line no-console, @typescript-eslint/no-explicit-any

export const logError = (error: Error): void => {
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
export const logMessage = (...args: any[]): void => stdout(...args) // eslint-disable-line @typescript-eslint/no-explicit-any

export const createLogDebug = (maybeFeatureName?: string): IDebugger => {
  const debugName = ["create-exposed-app", maybeFeatureName]
    .filter(Boolean)
    .join(":")
  return debugCreator(debugName)
}

export const logDebug = createLogDebug()
