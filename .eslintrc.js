// .eslintrc.js
module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 extends: [
  "eslint:recommended",
  "plugin:react/recommended",
 ],
 parserOptions: {
  ecmaFeatures: {
   jsx: true,
  },
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["react"],
 rules: {
  // Add or override rules here if needed
 },
 settings: {
  react: {
   version: "detect", // Automatically detect the React version
  },
 },
};
