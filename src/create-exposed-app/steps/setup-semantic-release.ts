import { logDebug } from "../../common/log"
import { spawn } from "../../common/spawn"
import { AppContext } from "../context"

export function executeStepSetupSemanticRelease(
  context: AppContext,
): Promise<AppContext> {
  if (context.options.skipSetupSemanticRelease) {
    logDebug("Skipping setup semantic release step...")
    return Promise.resolve(context)
  }
  spawn("npx semantic-release-cli setup")
  return Promise.resolve(context)
}
