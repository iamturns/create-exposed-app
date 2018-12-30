const fs = require("fs")
const ejs = require("ejs")

const renderView = (view, data) => ejs.render(view, data)

const renderViewOnFile = async (filePath, data) => {
  const fileContents = fs.readFileSync(filePath, "utf8")
  const view = await renderView(fileContents, data)
  fs.writeFileSync(filePath, view)
}

module.exports = {
  renderView,
  renderViewOnFile,
}
