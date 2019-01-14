import inquirer, { Questions } from "inquirer"

export const ask = (questions: Questions) => inquirer.prompt(questions)

export const askSetupQuestions = () =>
  ask([
    {
      type: "input",
      name: "projectPackageName",
      message: "Project package name:",
      default: "my-awesome-project",
    },
    {
      type: "input",
      name: "projectOverview",
      message: "Project overview:",
      default: "Keep it short and sweet",
    },
    {
      type: "list",
      name: "side",
      message: "Side:",
      choices: ["server", "client"],
    },
  ])

export const askSetupSemanticRelease = async (): Promise<boolean> => {
  const answers = await ask([
    {
      type: "confirm",
      name: "setup",
      message: "Setup semantic release?",
      default: true,
    },
  ])
  return answers.setup
}
