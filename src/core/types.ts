export enum AppOptionSide {
  server = "server",
  client = "client",
}

export const isAppOptionSide = (str: string): str is AppOptionSide =>
  Object.values(AppOptionSide).some(val => val === str)

export interface AppOptions {
  projectPackageName: string
  projectOverview: string
  side: AppOptionSide
  authorName: string
  authorEmail: string
  authorGitHub: string
  authorWebsite?: string
}
