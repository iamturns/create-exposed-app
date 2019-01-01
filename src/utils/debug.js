const debugCreator = require("debug")

const debugName = maybeFeatureName =>
  ["create-iamturns-app", maybeFeatureName].filter(Boolean).join(":")

const createDebug = maybeFeatureName =>
  debugCreator(debugName(maybeFeatureName))

const debug = createDebug()

module.exports = {
  debug,
  createDebug,
}
