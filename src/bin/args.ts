import yargs from "yargs"

import { AppOptionSide, AppOptions, isAppOptionSide } from "../core/types"

interface Args {
  "project-package-name": string
  "project-overview": string
  side: string
  "author-name": string
  "author-email": string
  "author-github": string
  "author-website"?: string
}

const argsToAppOptions = (args: Args): AppOptions => {
  if (!isAppOptionSide(args.side)) {
    throw new Error("Invalid option side")
  }

  return {
    projectPackageName: args["project-package-name"],
    projectOverview: args["project-overview"],
    side: AppOptionSide[args.side],
    authorName: args["author-name"],
    authorEmail: args["author-email"],
    authorGitHub: args["author-github"],
    authorWebsite: args["author-website"],
  }
}

const parseArgs = (): Args =>
  yargs
    .options({
      "project-package-name": {
        description: "e.g. `my-awesome-project`",
        type: "string",
        requiresArg: true,
        demandOption: true,
      },
      "project-overview": {
        description: "e.g. `Does awesome stuff`",
        type: "string",
        requiresArg: true,
        demandOption: true,
      },
      side: {
        description: "e.g. `side`",
        choices: ["server", "client"],
        requiresArg: true,
        demandOption: true,
      },
      "author-name": {
        description: "e.g. `Bruce Wayne`",
        type: "string",
        requiresArg: true,
        demandOption: true,
      },
      "author-email": {
        description: "e.g. `bruce.wayne@gmail.com`",
        type: "string",
        requiresArg: true,
        demandOption: true,
      },
      "author-github": {
        description: "GitHub username, e.g. `batman`",
        type: "string",
        requiresArg: true,
        demandOption: true,
      },
      "author-website": {
        description: "e.g. `https://batman.com`",
        type: "string",
        requiresArg: true,
      },
    })
    .parse()

export const getArgs = (): AppOptions => argsToAppOptions(parseArgs())
