import { SpawnSyncOptions, SpawnSyncReturns } from "child_process"

import crossSpawn from "cross-spawn"
import shellQuote from "shell-quote"

import { debug } from "./debug"

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
  debug("Spawning command: %s", command)
  debug("Command options: %j", commandOptions)
  debug("Exit on complete: %j", exitOnComplete)
  debug("Exit on error: %j", exitOnError)

  const commandParts = getCommandParts(command)
  debug("Command parts: %j", commandParts)

  const response = crossSpawn.sync(
    commandParts.command,
    commandParts.args,
    commandOptions,
  )
  debug("Response status: %j", response.status)

  if (shouldExit(exitOnComplete, exitOnError, response)) {
    debug("shouldExit = true")
    process.exit(response.status)
  }

  return response
}
