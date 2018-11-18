const withPlugins = require("next-compose-plugins");
const withTM = require("next-plugin-transpile-modules");
const withTypescript = require("@zeit/next-typescript");

const nextConfig = {
    webpack: (config, options) => {
      // modify the `config` here
      // console.log("CONFIG",config)
      return config;
    },
  };

module.exports = withPlugins([
 [withTM, {
  transpileModules: ["@myproject/common"],
 }],
 [withTypescript],
], nextConfig);
