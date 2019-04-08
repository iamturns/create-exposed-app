#!/usr/bin/env node

import { logDebug } from "./common/log"
import { setupProcess } from "./common/process"
import { getArgs } from "./create-exposed-app/args"
import { createExposedApp } from "./create-exposed-app/create-exposed-app"
import {
  AppOptionSide,
  AppOptionsUser,
  validateOptions,
} from "./create-exposed-app/options"

main()

async function main(): Promise<void> {
  setupProcess()

  const args = await getArgs()
  logDebug("Args: %j", args)

  const maybeOptions = {
    projectPackageName: args["project-package-name"],
    projectOverview: args["project-overview"],
    side: args.side as AppOptionSide,
    authorName: args["author-name"],
    authorEmail: args["author-email"],
    authorGitHub: args["author-github"],
    authorWebsite: args["author-website"],
    skipInstallDependencies: !args["install-dependencies"],
    skipSetupSemanticRelease: !args["setup-semantic-release"],
    destinationPath: args["destination-path"],
  }

  validateOptions(maybeOptions)

  const options = maybeOptions as AppOptionsUser

  createExposedApp(options)
}
