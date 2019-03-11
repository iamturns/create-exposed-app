import { app } from "./create-exposed-app-default-server-side-example"

describe("app", () => {
  test("it should be ok", () => {
    expect(app.ok).toBe(true)
  })
})
