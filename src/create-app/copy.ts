import recursiveCopy from "recursive-copy"

import { debug } from "../utils/debug"
import { logError } from "../utils/log"

export interface CopyOperation {
  dest: string
}

const templateSuffix = ".template"

const removeTemplateSuffix = (filePath: string): string =>
  filePath.substr(0, filePath.length - ".template".length)

const toDestinationPath = (templatePath: string): string =>
  templatePath.endsWith(templateSuffix)
    ? removeTemplateSuffix(templatePath)
    : templatePath

const onCopyComplete = (copyOperation: CopyOperation) =>
  debug("Copied %s", copyOperation.dest)

const onCopyError = (copyOperation: CopyOperation) =>
  logError(copyOperation.dest)

const recuriveCopyOptions = {
  overwrite: true,
  dot: true,
  rename: (filePath: string) => {
    const destinationPath = toDestinationPath(filePath)
    debug("Filepath %s to %s", filePath, destinationPath)
    return destinationPath
  },
}

export const copy = (sourcePath: string, destPath: string): CopyOperation[] =>
  recursiveCopy(sourcePath, destPath, recuriveCopyOptions)
    .on(recursiveCopy.events.COPY_FILE_COMPLETE, onCopyComplete)
    .on(recursiveCopy.events.ERROR, onCopyError)
