import { AppOptions } from "../core/types"
import { ask, createInputQuestion } from "../utils/ask"

export const askForAppOptions = (): Promise<AppOptions> =>
  ask([
    createInputQuestion(
      {
        name: "projectPackageName",
        message: "Project package name:",
        default: "my-awesome-project",
      },
      { isRequired: true, acceptDefault: false },
    ),
    createInputQuestion(
      {
        name: "projectOverview",
        message: "Project overview:",
        default: "Keep it short and sweet",
      },
      { isRequired: true, acceptDefault: false },
    ),
    {
      type: "list",
      name: "side",
      message: "Side:",
      choices: ["server", "client"],
    },
    createInputQuestion(
      {
        name: "authorName",
        message: "Your name:",
        default: "Bruce Wayne",
      },
      { isRequired: true, acceptDefault: false },
    ),
    createInputQuestion(
      {
        name: "authorEmail",
        message: "Your email:",
        default: "bruce.wayne@gmail.com",
      },
      { isRequired: true, acceptDefault: false },
    ),
    createInputQuestion(
      {
        name: "authorGitHub",
        message: "Your GitHub username:",
        default: "batman",
      },
      { isRequired: true, acceptDefault: false },
    ),
    createInputQuestion(
      {
        name: "authorWebsite",
        message: "Your website (optional):",
        default: "https://batman.com",
      },
      { isRequired: false, acceptDefault: false },
    ),
  ]) as Promise<AppOptions>
