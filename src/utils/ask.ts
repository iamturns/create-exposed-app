import inquirer, { Answers, Question, Questions } from "inquirer"

export const ask = (questions: Questions): Promise<Answers> =>
  inquirer.prompt(questions)

type FilterFunction = (answer: string) => string
type ValidateFunction = (answer: string) => boolean

const createDefaultFilterFunction = (
  defaultAnswer: string,
  acceptDefault: boolean,
): FilterFunction => (answer: string): string => {
  if (acceptDefault) {
    return answer
  }
  const isAnswerProvided = answer !== defaultAnswer
  return isAnswerProvided ? answer : ""
}

const createDefaultValidateFunction = (
  isRequired: boolean,
): ValidateFunction => (answer: string): boolean => {
  if (!isRequired) {
    return true
  }
  const isAnswerEmpty = answer === ""
  return !isAnswerEmpty
}

export const createInputQuestion = (
  question: Question,
  {
    isRequired,
    acceptDefault,
  }: { isRequired: boolean; acceptDefault: boolean },
): Question => {
  const newQuestion = { type: "input", ...question }
  if (!newQuestion.filter) {
    newQuestion.filter = createDefaultFilterFunction(
      question.default,
      acceptDefault,
    )
  }
  if (!newQuestion.validate) {
    newQuestion.validate = createDefaultValidateFunction(isRequired)
  }
  return newQuestion
}
