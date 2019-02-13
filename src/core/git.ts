import path from "path"

import { pathExists } from "../utils/fs"
import { logDebug } from "../utils/log"
import { spawn } from "../utils/spawn"
import { ViewData } from "./view-data/view-data"

const calcGitDir = (filePath: string): string => path.resolve(filePath, ".git")

const calcOrigin = (viewData: ViewData): string =>
  `git@github.com:${viewData.authorGitHub}/${viewData.projectPackageName}.git`

export const setupGit = (filePath: string, viewData: ViewData): void => {
  const gitDir = calcGitDir(filePath)
  logDebug("Git dir: %s", gitDir)

  if (pathExists(gitDir)) {
    logDebug("Git already setup, skipping...")
    return
  }

  const origin = calcOrigin(viewData)
  logDebug("Git origin: %s", origin)

  spawn("git init")
  spawn(`git remote add origin ${origin}`)
  spawn('git commit --allow-empty -m "Init"')
  spawn("git checkout -b hello-world")
}
