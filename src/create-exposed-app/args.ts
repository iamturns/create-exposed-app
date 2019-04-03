import yargsInteractive from "yargs-interactive"

export interface Args {
  "project-package-name"?: string
  "project-overview"?: string
  side: "server" | "client"
  "author-name"?: string
  "author-email"?: string
  "author-github"?: string
  "author-website"?: string
  "install-dependencies": boolean
  "setup-semantic-release": boolean
}

const options = {
  interactive: { default: true },
  "project-package-name": {
    describe: "Project package name (e.g. `my-awesome-project`)",
    type: "input",
    validate: isAnswerProvided,
  },
  "project-overview": {
    describe: "Project overview (e.g. `Does awesome stuff`)",
    type: "input",
    validate: isAnswerProvided,
  },
  side: {
    describe: "Side",
    type: "list",
    choices: ["server", "client"],
  },
  "author-name": {
    describe: "Author name (e.g. `Bruce Wayne`)",
    type: "input",
    validate: isAnswerProvided,
  },
  "author-email": {
    describe: "Author email (e.g. `bruce.wayne@gmail.com`)",
    type: "input",
    validate: isAnswerProvided,
  },
  "author-github": {
    describe: "Author GitHub username (e.g. `batman`)",
    type: "input",
    validate: isAnswerProvided,
  },
  "author-website": {
    describe: "Author website (optional) (e.g. `https://batman.com`)",
    type: "input",
  },
  "setup-semantic-release": {
    describe: "Setup semantic release",
    type: "confirm",
    default: true,
    prompt: "if-no-arg",
  },
  "install-dependencies": {
    describe: "Skip installing dependencies",
    type: "confirm",
    default: true,
    prompt: "never",
  },
}

export async function getArgs(): Promise<Args> {
  type LooseArgs = Record<string, any> // eslint-disable-line @typescript-eslint/no-explicit-any
  const args = (await yargsInteractive().interactive(options)) as LooseArgs

  args["setup-semantic-release"] = isArgsBoolean(args["setup-semantic-release"])
  args["install-dependencies"] = isArgsBoolean(args["install-dependencies"])

  return args as Args
}

function isAnswerProvided(answer: string): boolean {
  return answer !== ""
}

function isArgsBoolean(answer: boolean | string): boolean {
  return answer === true || answer === "true"
}
