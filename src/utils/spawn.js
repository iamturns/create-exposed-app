const crossSpawn = require("cross-spawn")

const { debug } = require("./debug")

const shouldExit = (exitOnComplete, exitOnError, response) => {
  if (exitOnComplete) {
    return true
  }
  return exitOnError && response.status !== 0
}

const getCommandParts = commandIn => {
  const [command, ...args] = commandIn.split(" ")
  return { command, args }
}

const spawn = (
  command,
  {
    commandOptions = { stdio: "inherit" },
    exitOnComplete = false,
    exitOnError = true,
  } = {},
) => {
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

module.exports = {
  spawn,
}
