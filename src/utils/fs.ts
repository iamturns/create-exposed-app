import fs from "fs"

export const isDir = (path: string): boolean => fs.lstatSync(path).isDirectory()
export const pathExists = (path: string): boolean => fs.existsSync(path)
