import fs from "fs"

import ejs from "ejs"

export function renderView(
  view: string,
  data: Record<string, string | undefined>,
): string {
  return ejs.render(view, data)
}

export async function renderViewOnFile(
  filePath: string,
  data: Record<string, string | undefined>,
): Promise<void> {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const view = await renderView(fileContents, data)
  fs.writeFileSync(filePath, view)
}
