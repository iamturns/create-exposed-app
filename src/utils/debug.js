const debugCreator = require("debug")

const debugName = featureName =>
  ["create-iamturns-app", featureName].filter(Boolean).join(":")
const createDebug = featureName => debugCreator(debugName(featureName))

const debug = createDebug()

module.exports = {
  debug,
  createDebug,
}
