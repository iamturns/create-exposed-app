import { AppOptionSide, AppOptions } from "../options"
import { getViewData } from "./view-data"

const appOptions: AppOptions = {
  authorEmail: "test@test.com",
  authorGitHub: "the-tester",
  authorName: "The Tester",
  destinationPath: "./",
  projectOverview: "My test project",
  projectPackageName: "my-test-project",
  side: AppOptionSide.server,
  skipInstallDependencies: false,
  skipSetupSemanticRelease: false,
}

const authorWebsite = "https://test.com"

describe("view-data", () => {
  test("githubRepoUrl is correct", () => {
    const result = getViewData(appOptions)
    expect(result.gitHubRepoUrl).toBe(
      "https://github.com/the-tester/my-test-project",
    )
  })

  describe("markdownAuthor", () => {
    test("it should be the name and email by default ", () => {
      const result = getViewData(appOptions)
      expect(result.markdownAuthor).toBe(
        "The Tester <[test@test.com](mailto:test@test.com)>",
      )
    })

    test("it should append website when supplied ", () => {
      const result = getViewData({
        ...appOptions,
        authorWebsite,
      })
      expect(result.markdownAuthor).toBe(
        "The Tester <[test@test.com](mailto:test@test.com)> ([test.com](https://test.com))",
      )
    })
  })

  describe("npmAuthor", () => {
    test("it should be the name and email by default", () => {
      const result = getViewData(appOptions)
      expect(result.npmAuthor).toBe("The Tester <test@test.com>")
    })

    test("it should append the website if supplied", () => {
      const result = getViewData({ ...appOptions, authorWebsite })
      expect(result.npmAuthor).toBe(
        "The Tester <test@test.com> (https://test.com)",
      )
    })
  })
})
