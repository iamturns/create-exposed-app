import recursiveCopy from "recursive-copy"

import { logDebug, logError } from "../../../common/log"
import { ViewData } from "../../view-data/view-data"

const templateSuffix = ".template"

export interface CopyOperation {
  dest: string
}

export function copy(
  sourcePath: string,
  destPath: string,
  viewData: ViewData,
): CopyOperation[] {
  const recuriveCopyOptions = {
    overwrite: true,
    dot: true,
    rename: (filePath: string): string => {
      const newDestPath = toDestinationPath(filePath, viewData)
      logDebug("Copy %s to %s", filePath, newDestPath)
      return newDestPath
    },
  }

  return recursiveCopy(sourcePath, destPath, recuriveCopyOptions)
    .on(recursiveCopy.events.COPY_FILE_COMPLETE, onCopyComplete)
    .on(recursiveCopy.events.ERROR, onCopyError)
}

function toDestinationPath(templatePath: string, viewData: ViewData): string {
  const noSuffix = removeTemplateSuffix(templatePath)
  const withViewData = replaceFilePathWithViewData(noSuffix, viewData)
  return withViewData
}

function removeTemplateSuffix(filePath: string): string {
  return filePath.endsWith(templateSuffix)
    ? filePath.substr(0, filePath.length - templateSuffix.length)
    : filePath
}

function replaceFilePathWithViewData(
  filePath: string,
  viewData: ViewData,
): string {
  return Object.entries(viewData).reduce(
    (accfilePath, viewDataEntry): string => {
      const [viewKey, viewValue] = viewDataEntry
      return replaceFilePathWithViewParts(accfilePath, viewKey, viewValue)
    },
    filePath,
  )
}

function replaceFilePathWithViewParts(
  filePath: string,
  viewKey: string,
  viewValue: string,
): string {
  if (!viewValue) {
    return filePath
  }
  return filePath.replace(`{${viewKey}}`, viewValue)
}

function onCopyComplete(copyOperation: CopyOperation): void {
  logDebug("Copied %s", copyOperation.dest)
}

function onCopyError(copyOperation: CopyOperation): void {
  logError(new Error(`Could not copy ${copyOperation.dest}`))
}
