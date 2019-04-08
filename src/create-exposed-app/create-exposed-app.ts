import { reduce as asyncReduce } from "asyncro"

import { logDebug } from "../common/log"
import { AppContext, createAppContext } from "./context"
import { AppOptionsUser, processUserOptions, validateOptions } from "./options"
import { executeStepCopyTemplate } from "./steps/copy-template/copy-template"
import { executeStepFormatFiles } from "./steps/format-files"
import { executeStepGit } from "./steps/git"
import { executeStepGoodbye } from "./steps/goodbye"
import { executeStepInstallDependencies } from "./steps/install-dependencies"
import { executeStepSetupSemanticRelease } from "./steps/setup-semantic-release"

export type StepFunction = (context: AppContext) => Promise<AppContext>

export async function createExposedApp(options: AppOptionsUser): Promise<void> {
  logDebug("Options: %o", options)

  validateOptions(options)

  const processedOptions = processUserOptions(options)
  logDebug("Processed options: %o", processedOptions)

  const context = createAppContext(processedOptions)
  logDebug("Context: %o", context)

  process.chdir(context.options.destinationPath)

  const stepsToExecute: StepFunction[] = [
    executeStepGit,
    executeStepCopyTemplate,
    executeStepInstallDependencies,
    executeStepFormatFiles,
    executeStepSetupSemanticRelease,
    executeStepGoodbye,
  ]

  await executeSteps(stepsToExecute, context)
}

async function executeSteps(
  stepsToExecute: StepFunction[],
  context: AppContext,
): Promise<AppContext> {
  return asyncReduce(stepsToExecute, executeStep, context)
}

async function executeStep(
  context: AppContext,
  stepToExecute: StepFunction,
): Promise<AppContext> {
  logDebug("Executing step: %s", stepToExecute.name)
  logDebug("Step context: %o", context)
  const newContext = await stepToExecute(context)
  return newContext
}
