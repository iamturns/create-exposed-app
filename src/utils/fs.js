const fs = require("fs")

const isDir = path => fs.lstatSync(path).isDirectory()
const pathExists = path => fs.existsSync(path)

module.exports = {
  isDir,
  pathExists,
}
