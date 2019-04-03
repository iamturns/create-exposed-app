export interface AppOptionsUser {
  // Config
  destinationPath?: string
  // Data
  projectPackageName: string
  projectOverview: string
  side: AppOptionSide
  authorName: string
  authorEmail: string
  authorGitHub: string
  authorWebsite?: string
  // Modifiers
  skipInstallDependencies?: boolean
  skipSetupSemanticRelease?: boolean
}

export interface AppOptions {
  // Config
  destinationPath: string
  // Data
  projectPackageName: string
  projectOverview: string
  side: AppOptionSide
  authorName: string
  authorEmail: string
  authorGitHub: string
  authorWebsite?: string
  // Modifiers
  skipInstallDependencies: boolean
  skipSetupSemanticRelease: boolean
}

export enum AppOptionSide {
  server = "server",
  client = "client",
}

export function isAppOptionSide(str: string): str is AppOptionSide {
  return Object.values(AppOptionSide).some(val => val === str)
}

export function validateOptions(
  options: Partial<AppOptionsUser>,
): options is AppOptionsUser {
  if (!options.projectPackageName) {
    throw new Error("Missing option `projectPackageName`")
  }

  if (!options.projectOverview) {
    throw new Error("Missing option `projectOverview`")
  }

  if (!options.side) {
    throw new Error("Missing option `side`")
  }

  if (!isAppOptionSide(options.side)) {
    throw new Error("Invalid option `side`")
  }

  if (!options.authorName) {
    throw new Error("Missing option `authorName`")
  }

  if (!options.authorEmail) {
    throw new Error("Missing option `authorEmail`")
  }

  if (!options.authorGitHub) {
    throw new Error("Missing option `authorGitHub`")
  }

  if (!options.authorGitHub) {
    throw new Error("Missing option `authorGitHub`")
  }

  return true
}

export function processUserOptions(options: AppOptionsUser): AppOptions {
  return {
    ...options,
    destinationPath: options.destinationPath || process.cwd(),
    skipInstallDependencies: options.skipInstallDependencies || false,
    skipSetupSemanticRelease: options.skipSetupSemanticRelease || false,
  }
}
