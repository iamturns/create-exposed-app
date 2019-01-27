import path from "path"

import { pathExists } from "../utils/fs"
import { logDebug } from "../utils/log"
import { spawn } from "../utils/spawn"

const calcGitDir = (filePath: string): string => path.resolve(filePath, ".git")

const calcOrigin = (setupAnswers: Record<string, string>): string =>
  `git@github.com:iamturns/${setupAnswers.projectPackageName}.git`

export const setupGit = (
  filePath: string,
  setupAnswers: Record<string, string>,
) => {
  const gitDir = calcGitDir(filePath)
  logDebug("Git dir: %s", gitDir)

  if (pathExists(gitDir)) {
    logDebug("Git already setup, skipping...")
    return
  }

  const origin = calcOrigin(setupAnswers)
  logDebug("Git origin: %s", origin)

  spawn("git init")
  spawn(`git remote add origin ${origin}`)
  spawn('git commit --allow-empty -m "Init"')
  spawn("git checkout -b hello-world")
}
