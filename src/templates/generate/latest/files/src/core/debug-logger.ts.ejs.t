---
to: src/core/debug-logger.ts
---
import debugCreator, { Debugger } from "debug";

import { config } from "./config";

export function createDebugLogger(maybeFeatureName?: string): Debugger {
  const debugName = [config.current.PACKAGE_NAME, maybeFeatureName]
    .filter(Boolean)
    .join(":");
  return debugCreator(debugName);
}

export const debugLogger: { current: Debugger } = {
  current: {} as Debugger, // Consumers can assume the bootstrap function has been called
};

export function bootstrapDebugLogger(): void {
  debugLogger.current = createDebugLogger();
}
