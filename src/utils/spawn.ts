import { SpawnSyncOptions, SpawnSyncReturns } from "child_process"

import crossSpawn from "cross-spawn"
import shellQuote from "shell-quote"

import { logDebug } from "./log"

const shouldExit = (
  exitOnComplete: boolean,
  exitOnError: boolean,
  response: SpawnSyncReturns<Buffer>,
) => {
  if (exitOnComplete) {
    return true
  }
  return exitOnError && response.status !== 0
}

const getCommandParts = (
  commandIn: string,
): { command: string; args: string[] } => {
  const [command, ...args] = shellQuote.parse(commandIn)
  return { command, args }
}

export const spawn = (
  command: string,
  {
    commandOptions = { stdio: "inherit" },
    exitOnComplete = false,
    exitOnError = true,
  }: {
    commandOptions?: SpawnSyncOptions
    exitOnComplete?: boolean
    exitOnError?: boolean
  } = {},
): SpawnSyncReturns<Buffer> => {
  logDebug("Spawning command: %s", command)
  logDebug("Command options: %j", commandOptions)
  logDebug("Exit on complete: %j", exitOnComplete)
  logDebug("Exit on error: %j", exitOnError)

  const commandParts = getCommandParts(command)
  logDebug("Command parts: %j", commandParts)

  const response = crossSpawn.sync(
    commandParts.command,
    commandParts.args,
    commandOptions,
  )
  logDebug("Response status: %j", response.status)

  if (shouldExit(exitOnComplete, exitOnError, response)) {
    logDebug("shouldExit = true")
    process.exit(response.status)
  }

  return response
}
