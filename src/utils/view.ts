import fs from "fs"

import ejs from "ejs"

import { ViewData } from "../core/view-data/view-data"

export const renderView = (view: string, data: ViewData): string =>
  ejs.render(view, data)

export const renderViewOnFile = async (
  filePath: string,
  data: ViewData,
): Promise<void> => {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const view = await renderView(fileContents, data)
  fs.writeFileSync(filePath, view)
}
