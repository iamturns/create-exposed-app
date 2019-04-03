import { logMessage } from "../../common/log"
import { AppContext } from "../context"

export function executeStepGoodbye(context: AppContext): Promise<AppContext> {
  logMessage("All done!")
  logMessage("VS Code users: run 'Extensions: Show Recommended Extensions'")
  return Promise.resolve(context)
}
