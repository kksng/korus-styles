module.exports = {
  extends: [
    "./rules/prettier",
    "./rules/base",
    "./rules/import",
    "./rules/jsdoc",
    "./rules/regex",
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
