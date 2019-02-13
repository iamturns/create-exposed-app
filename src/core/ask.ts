import { ask } from "../utils/ask"

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
