const path = require("path")
const { renderViewOnFile } = require("../utils/view")
const { logMessage, logError } = require("../utils/log")
const { isDir } = require("../utils/fs")
const { debug } = require("../utils/debug")
const { spawn } = require("../utils/spawn")
const { askSetupQuestions, askSetupSemanticRelease } = require("./ask")
const { copy } = require("./copy")
const { setupGit } = require("./git")

const templatesPath = path.resolve(__dirname, "..", "templates")
debug("Templates path: %s", templatesPath)

const destinationPath = process.cwd()
debug("Destination path: %s", destinationPath)

const doCopy = async templatePath => {
  try {
    const copyResults = await copy(templatePath, destinationPath)
    logMessage(`${copyResults.length} file(s) copied`)
    return copyResults
  } catch (e) {
    logError(`Could not copy: ${e}`)
    throw e
  }
}

const renderView = async (filePath, data) => {
  debug("Rendering view: %s", filePath)
  try {
    await renderViewOnFile(filePath, data)
  } catch (e) {
    logError(`Could not process ${filePath}: ${e}`)
  }
}

const getFilePaths = copyResults =>
  copyResults
    .map(copyResult => copyResult.dest)
    .filter(filePath => !isDir(filePath))

const copyAndRender = async (templatePath, viewData) => {
  const copyResults = await doCopy(templatePath)
  const filePaths = getFilePaths(copyResults)
  const renderViews = filePaths.map(filePath => renderView(filePath, viewData))
  await Promise.all(renderViews)
}

const createApp = async () => {
  const setupAnswers = await askSetupQuestions()
  debug("Setup answers: %O", setupAnswers)

  setupGit(destinationPath, setupAnswers)

  const baseTemplatePath = path.resolve(templatesPath, "1-base")
  await copyAndRender(baseTemplatePath, setupAnswers)

  if (setupAnswers.side === "server") {
    const serverSideTemplatePath = path.resolve(templatesPath, "2-server-side")
    await copyAndRender(serverSideTemplatePath, setupAnswers)
  } else if (setupAnswers.side === "client") {
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

module.exports = {
  createApp,
}
