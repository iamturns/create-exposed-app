import { logDebug } from "./log"

export function setupProcess(): void {
  // Handle silently failing Promises
  process.on("unhandledRejection", (error: unknown) => {
    logDebug("Unhandled rejection: %j", error)
    if (error instanceof Error) {
      throw Error
    }
  })
}
