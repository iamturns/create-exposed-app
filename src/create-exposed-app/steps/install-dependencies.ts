import { logDebug } from "../../common/log"
import { spawn } from "../../common/spawn"
import { AppContext } from "../context"

export function executeStepInstallDependencies(
  context: AppContext,
): Promise<AppContext> {
  if (context.options.skipInstallDependencies) {
    logDebug("Skipping install dependencies step...")
    return Promise.resolve(context)
  }

  spawn("npm install")
  return Promise.resolve(context)
}
