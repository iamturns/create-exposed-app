import inquirer, { Answers, Question, Questions } from "inquirer"

export interface SetupAnswers {
  projectPackageName: string
  projectOverview: string
  list: "server" | "client"
  authorName: string
  authorEmail: string
  authorGitHub: string
  authorWebsite?: string
}

export const ask = (questions: Questions): Promise<Answers> =>
  inquirer.prompt(questions)

const createInputQuestion = (
  question: Question,
  {
    isRequired,
    acceptDefault,
  }: { isRequired: boolean; acceptDefault: boolean },
): Question => {
  const newQuestion = { ...question, type: "input" }

  if (!newQuestion.filter) {
    newQuestion.filter = (answer: string): string => {
      if (acceptDefault) {
        return answer
      }
      const isAnswerProvided = answer !== question.default
      return isAnswerProvided ? answer : ""
    }
  }

  if (!newQuestion.validate) {
    newQuestion.validate = (answer: string): boolean => {
      if (!isRequired) {
        return true
      }
      const isAnswerEmpty = answer === ""
      return !isAnswerEmpty
    }
  }

  return newQuestion
}

export const askSetupQuestions = (): Promise<SetupAnswers> =>
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
  ]) as Promise<SetupAnswers>

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
