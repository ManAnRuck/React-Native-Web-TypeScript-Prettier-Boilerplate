const path = require('path');

alternateRoots = [
  
];

module.exports = {
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer');
    },
    getSourceExts() {
      return ['ts', 'tsx'];
    },
    extraNodeModules: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-native": path.resolve(__dirname, "node_modules/react-native"),
    },
    getProjectRoots() {
        return [
          path.resolve(__dirname),
          path.resolve(__dirname, "./node_modules"),
          path.resolve(__dirname, "../common"),
          path.resolve(__dirname, "../../node_modules"),

        ].concat(alternateRoots)
      },
  };