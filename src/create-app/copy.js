const recursiveCopy = require("recursive-copy")

const { logError } = require("../utils/log")
const { debug } = require("../utils/debug")

const templateSuffix = ".template"

const removeTemplateSuffix = filePath =>
  filePath.substr(0, filePath.length - ".template".length)

const toDestinationPath = templatePath =>
  templatePath.endsWith(templateSuffix)
    ? removeTemplateSuffix(templatePath)
    : templatePath

const onCopyComplete = copyOperation => debug("Copied %s", copyOperation.dest)
const onCopyError = copyOperation => logError(copyOperation.dest)

const recuriveCopyOptions = {
  overwrite: true,
  dot: true,
  rename: filePath => {
    const destinationPath = toDestinationPath(filePath)
    debug("Filepath %s to %s", filePath, destinationPath)
    return destinationPath
  },
}

const copy = (sourcePath, destPath) =>
  recursiveCopy(sourcePath, destPath, recuriveCopyOptions)
    .on(recursiveCopy.events.COPY_FILE_COMPLETE, onCopyComplete)
    .on(recursiveCopy.events.ERROR, onCopyError)

module.exports = { copy }
