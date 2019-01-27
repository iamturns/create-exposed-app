import recursiveCopy from "recursive-copy"

import { logDebug, logError } from "../utils/log"

export interface CopyOperation {
  dest: string
}

const templateSuffix = ".template"

const removeTemplateSuffix = (filePath: string): string =>
  filePath.endsWith(templateSuffix)
    ? filePath.substr(0, filePath.length - templateSuffix.length)
    : filePath

const replaceFilepathVariable = (
  filePath: string,
  key: string,
  value: string,
): string => filePath.replace(`{${key}}`, value)

const replaceFilepathViewData = (
  filePath: string,
  viewData: Record<string, string>,
): string =>
  Object.entries(viewData).reduce(
    (filePathProcessed, viewDataItem) =>
      replaceFilepathVariable(
        filePathProcessed,
        viewDataItem[0],
        viewDataItem[1],
      ),
    filePath,
  )

const toDestinationPath = (
  templatePath: string,
  viewData: Record<string, string>,
): string => {
  const noSuffix = removeTemplateSuffix(templatePath)
  const withViewData = replaceFilepathViewData(noSuffix, viewData)
  return withViewData
}

const onCopyComplete = (copyOperation: CopyOperation): void =>
  logDebug("Copied %s", copyOperation.dest)

const onCopyError = (copyOperation: CopyOperation): void =>
  logError(new Error(`Could not copy ${copyOperation.dest}`))

export const copy = (
  sourcePath: string,
  destPath: string,
  viewData: Record<string, string>,
): CopyOperation[] => {
  const recuriveCopyOptions = {
    overwrite: true,
    dot: true,
    rename: (filePath: string) => {
      const destinationPath = toDestinationPath(filePath, viewData)
      logDebug("Copy %s to %s", filePath, destinationPath)
      return destinationPath
    },
  }

  return recursiveCopy(sourcePath, destPath, recuriveCopyOptions)
    .on(recursiveCopy.events.COPY_FILE_COMPLETE, onCopyComplete)
    .on(recursiveCopy.events.ERROR, onCopyError)
}
