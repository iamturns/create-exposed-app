import path from "path"

import { AppOptions } from "./options"
import { ViewData, getViewData } from "./view-data/view-data"

export interface AppContext {
  options: AppOptions
  templatesPath: string
  viewData: ViewData
}

export function createAppContext(options: AppOptions): AppContext {
  return {
    options,
    templatesPath: path.resolve(__dirname, "..", "..", "templates"),
    viewData: getViewData(options),
  }
}
