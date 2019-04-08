import path from "path"

import { pathExists } from "../../common/fs"
import { logDebug } from "../../common/log"
import { spawn } from "../../common/spawn"
import { AppContext } from "../context"
import { ViewData } from "../view-data/view-data"

export function executeStepGit(context: AppContext): Promise<AppContext> {
  if (pathExists(".git")) {
    logDebug("Git already setup, skipping...")
    return Promise.resolve(context)
  }

  const origin = calcOrigin(context.viewData)
  logDebug("Git origin: %s", origin)

  spawn("git init")
  spawn(`git remote add origin ${origin}`)
  spawn('git commit --allow-empty -m "Init"')
  spawn("git checkout -b hello-world")

  return Promise.resolve(context)
}

function calcOrigin(viewData: ViewData): string {
  return `git@github.com:${viewData.authorGitHub}/${
    viewData.projectPackageName
  }.git`
}
