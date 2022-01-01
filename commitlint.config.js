module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Loosen up on the line lengths
    "header-max-length": [2, "always", Number.POSITIVE_INFINITY],
    "body-max-line-length": [2, "always", Number.POSITIVE_INFINITY],
    "footer-max-line-length": [2, "always", Number.POSITIVE_INFINITY],
  },
};
