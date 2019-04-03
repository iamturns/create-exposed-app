import fs from "fs"

export function isDir(path: string): boolean {
  return fs.lstatSync(path).isDirectory()
}

export function pathExists(path: string): boolean {
  return fs.existsSync(path)
}
