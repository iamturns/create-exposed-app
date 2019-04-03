export function setupProcess(): void {
  // Do not allow Promises to fail silently
  process.on("unhandledRejection", (error: Error) => {
    throw error
  })
}
