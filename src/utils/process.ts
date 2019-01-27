export const setupProcess = (): void => {
  // Makes the script crash on unhandled rejections instead of silently ignoring them.
  process.on("unhandledRejection", err => {
    throw err
  })
}
