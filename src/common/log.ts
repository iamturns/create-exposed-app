import chalk from "chalk"
import debugCreator, { IDebugger } from "debug"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stdout(...args: any[]): void {
  console.log(...args) // eslint-disable-line no-console
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stderr(...args: any[]): void {
  console.error(...args) // eslint-disable-line no-console
}

// Alias for stdout
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logMessage(...args: any[]): void {
  stdout(...args)
}

export function logError(error: Error): void {
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

export function createLogDebug(maybeFeatureName?: string): IDebugger {
  const debugName = ["create-exposed-app", maybeFeatureName]
    .filter(Boolean)
    .join(":")
  return debugCreator(debugName)
}

export const logDebug = createLogDebug()
