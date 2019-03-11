import { app } from "./create-exposed-app"

describe("app", () => {
  test("it should be ok", () => {
    expect(app.ok).toBe(true)
  })
})
