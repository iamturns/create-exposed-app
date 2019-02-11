export const setupProcess = (): void => {
  // Do not allow Promises to fail silently
  process.on("unhandledRejection", err => {
    throw err
  })
}
