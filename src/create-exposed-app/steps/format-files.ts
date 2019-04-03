import { logMessage } from "../../common/log"
import { spawn } from "../../common/spawn"
import { AppContext } from "../context"

export function executeStepFormatFiles(
  context: AppContext,
): Promise<AppContext> {
  logMessage("Formatting files...")
  spawn("npm run format")
  return Promise.resolve(context)
}
