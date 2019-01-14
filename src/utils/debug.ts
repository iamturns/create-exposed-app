import debugCreator, { IDebugger } from "debug"

const debugName = (maybeFeatureName?: string): string =>
  ["create-exposed-app", maybeFeatureName].filter(Boolean).join(":")

export const createDebug = (maybeFeatureName?: string): IDebugger =>
  debugCreator(debugName(maybeFeatureName))

export const debug = createDebug()
