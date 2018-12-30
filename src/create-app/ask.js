const inquirer = require("inquirer")

// https://github.com/SBoudrias/Inquirer.js/
const questions = [
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
]

const ask = () => inquirer.prompt(questions)

module.exports = {
  ask,
}
