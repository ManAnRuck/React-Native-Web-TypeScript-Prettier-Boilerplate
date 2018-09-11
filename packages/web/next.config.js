const withPlugins = require("next-compose-plugins");
const withTM = require("next-plugin-transpile-modules");
const withTypescript = require("@zeit/next-typescript");

module.exports = withPlugins([
 [withTM, {
  transpileModules: ["@myproject/common"],
 }],
 [withTypescript],
]);
