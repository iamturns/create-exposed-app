---
to: importsort.config.js
---
module.exports = {
  ".js, .jsx": {
    parser: "babylon",
    style: "module",
  },
  ".ts, .tsx": {
    parser: "typescript",
    style: "module",
  },
};
