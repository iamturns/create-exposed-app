const setupProcess = () => {
  // Makes the script crash on unhandled rejections instead of silently ignoring them.
  process.on("unhandledRejection", err => {
    throw err
  })
}

module.exports = {
  setupProcess,
}
