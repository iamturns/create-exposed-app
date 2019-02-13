#!/usr/bin/env node

import { createApp } from "../core/create-app"
import { logDebug } from "../utils/log"
import { setupProcess } from "../utils/process"
import { getArgs } from "./args"
import { askForAppOptions } from "./ask"

setupProcess()
;(async () => {
  const hasArgs = process.argv.length > 2
  logDebug("Has args: %j", hasArgs)

  const appOptions = hasArgs ? getArgs() : await askForAppOptions()
  createApp(appOptions)
})()
