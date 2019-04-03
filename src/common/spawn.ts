import { SpawnSyncOptions, SpawnSyncReturns } from "child_process"

import crossSpawn from "cross-spawn"
import shellQuote from "shell-quote"

import { logDebug } from "./log"

interface SpawnOptions {
  commandOptions?: SpawnSyncOptions
  exitOnComplete?: boolean
  exitOnError?: boolean
}

export function spawn(
  command: string,
  {
    commandOptions = { stdio: "inherit" },
    exitOnComplete = false,
    exitOnError = true,
  }: SpawnOptions = {},
): SpawnSyncReturns<Buffer> {
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
    process.exit(response.status) // eslint-disable-line unicorn/no-process-exit
  }

  return response
}

interface CommandParts {
  command: string
  args: string[]
}

function getCommandParts(commandIn: string): CommandParts {
  const [command, ...args] = shellQuote.parse(commandIn) as string[]
  return { command, args }
}

function shouldExit(
  exitOnComplete: boolean,
  exitOnError: boolean,
  response: SpawnSyncReturns<Buffer>,
): boolean {
  if (exitOnComplete) {
    return true
  }
  return exitOnError && response.status !== 0
}
