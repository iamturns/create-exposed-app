import { app } from "./create-exposed-app-default-client-side-example"

describe("app", () => {
  test("it should be ok", () => {
    expect(app.ok).toBe(true)
  })
})
