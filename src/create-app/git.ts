const path = require("path")
const { pathExists } = require("../utils/fs")
const { debug } = require("../utils/debug")
const { spawn } = require("../utils/spawn")

const calcGitDir = (filePath: string): string => path.resolve(filePath, ".git")

const calcOrigin = (setupAnswers: Record<string, string>): string =>
  `git@github.com:iamturns/${setupAnswers.projectPackageName}.git`

export const setupGit = (
  filePath: string,
  setupAnswers: Record<string, string>,
) => {
  const gitDir = calcGitDir(filePath)
  debug("Git dir: %s", gitDir)

  if (pathExists(gitDir)) {
    debug("Git already setup, skipping...")
    return
  }

  const origin = calcOrigin(setupAnswers)
  debug("Git origin: %s", origin)

  spawn("git init")
  spawn(`git remote add origin ${origin}`)
  spawn('git commit --allow-empty -m "Init"')
  spawn("git checkout -b hello-world")
}
