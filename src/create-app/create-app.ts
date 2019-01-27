import path from "path"

import { isDir } from "../utils/fs"
import { logDebug, logError, logMessage } from "../utils/log"
import { spawn } from "../utils/spawn"
import { renderViewOnFile } from "../utils/view"
import { askSetupQuestions, askSetupSemanticRelease } from "./ask"
import { CopyOperation, copy } from "./copy"
import { setupGit } from "./git"

const templatesPath = path.resolve(__dirname, "..", "..", "templates")
logDebug("Templates path: %s", templatesPath)

const destinationPath = process.cwd()
logDebug("Destination path: %s", destinationPath)

const doCopy = async (
  templatePath: string,
  viewData: Record<string, string>,
): Promise<CopyOperation[]> => {
  try {
    const copyResults = await copy(templatePath, destinationPath, viewData)
    logMessage(`${copyResults.length} file(s) copied`)
    return copyResults
  } catch (e) {
    logError(new Error(`Could not copy: ${e}`))
    throw e
  }
}

const renderView = async (filePath: string, data: Record<string, string>) => {
  logDebug("Rendering view: %s", filePath)
  try {
    await renderViewOnFile(filePath, data)
  } catch (e) {
    logError(new Error(`Could not process ${filePath}: ${e}`))
  }
}

const getFilePaths = (copyResults: CopyOperation[]): string[] =>
  copyResults
    .map(copyResult => copyResult.dest)
    .filter(filePath => !isDir(filePath))

const copyAndRender = async (
  templatePath: string,
  viewData: Record<string, string>,
) => {
  const copyResults = await doCopy(templatePath, viewData)
  const filePaths = getFilePaths(copyResults)
  const renderViews = filePaths.map(filePath => renderView(filePath, viewData))
  await Promise.all(renderViews)
}

export const createApp = async () => {
  const setupAnswers = await askSetupQuestions()
  logDebug("Setup answers: %O", setupAnswers)

  setupGit(destinationPath, setupAnswers)

  const baseTemplatePath = path.resolve(templatesPath, "1-base")
  await copyAndRender(baseTemplatePath, setupAnswers)

  if (setupAnswers.side === "client") {
    const clientSideTemplatePath = path.resolve(templatesPath, "2-client-side")
    await copyAndRender(clientSideTemplatePath, setupAnswers)
  }

  spawn("npm install")

  logMessage("Formatting files...")
  spawn("npm run format")

  if (await askSetupSemanticRelease()) {
    spawn("npx semantic-release-cli setup")
  }

  logMessage("All done!")
  logMessage("VS Code users: run 'Extensions: Show Recommended Extensions'")
}
