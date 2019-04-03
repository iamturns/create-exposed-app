import { isDir } from "../../../common/fs"
import { logDebug, logError, logMessage } from "../../../common/log"
import { renderViewOnFile } from "../../../common/view"
import { AppContext } from "../../context"
import { ViewData } from "../../view-data/view-data"
import { CopyOperation, copy } from "./copy"

export async function executeStepCopyTemplate(
  context: AppContext,
): Promise<AppContext> {
  const copyResults = await executeCopy(context)
  const renderViews = getFilePaths(copyResults).map(filePath =>
    renderView(filePath, context.viewData),
  )
  await Promise.all(renderViews)
  return context
}

async function executeCopy(context: AppContext): Promise<CopyOperation[]> {
  try {
    const copyResults = await copy(
      context.templatesPath,
      context.options.destinationPath,
      context.viewData,
    )
    logMessage(`${copyResults.length} file(s) copied`)
    return copyResults
  } catch (error) {
    logError(new Error(`Could not copy: ${error}`))
    throw error
  }
}

function getFilePaths(copyResults: CopyOperation[]): string[] {
  return copyResults
    .map(copyResult => copyResult.dest)
    .filter(filePath => !isDir(filePath))
}

async function renderView(filePath: string, data: ViewData): Promise<void> {
  logDebug("Rendering view: %s", filePath)
  const dataToRender = (data as unknown) as Record<string, string | undefined>
  try {
    await renderViewOnFile(filePath, dataToRender)
  } catch (error) {
    logError(new Error(`Could not process ${filePath}: ${error}`))
  }
}
