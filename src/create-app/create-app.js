const path = require("path")
const { renderViewOnFile } = require("../utils/view")
const { logMessage, logError } = require("../utils/log")
const { isDir } = require("../utils/fs")
const { debug } = require("../utils/debug")
const { spawn } = require("../utils/spawn")
const { askSetupQuestions, askSetupSemanticRelease } = require("./ask")
const { copy } = require("./copy")
const { setupGit } = require("./git")

const templatePath = path.resolve(__dirname, "..", "template")
debug("Template path: %s", templatePath)

const destinationPath = process.cwd()
debug("Destination path: %s", destinationPath)

const doCopy = async () => {
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

const doSetup = async () => {
  const setupAnswers = await askSetupQuestions()
  debug("Setup answers: %O", setupAnswers)
  setupGit(destinationPath, setupAnswers)
  const copyResults = await doCopy()
  const filePaths = getFilePaths(copyResults)
  const renderViews = filePaths.map(filePath =>
    renderView(filePath, setupAnswers),
  )
  await Promise.all(renderViews)
}

const createApp = async () => {
  await doSetup()
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
