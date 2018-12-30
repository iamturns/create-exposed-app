const inquirer = require("inquirer")

const ask = questions => inquirer.prompt(questions)

const askSetupQuestions = () =>
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

const askSetupSemanticRelease = async () => {
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

module.exports = {
  ask,
  askSetupQuestions,
  askSetupSemanticRelease,
}
