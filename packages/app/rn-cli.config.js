const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

alternateRoots = [
  // path.resolve(__dirname),
  path.resolve(__dirname, "./node_modules"),
  // path.resolve(__dirname, "../common"),
  path.resolve(__dirname, "../../node_modules"),
  path.resolve(__dirname, "../.."),
];

module.exports = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-typescript-transformer")
    },
    watchFolders: [
      path.resolve(__dirname, "../.."),
      ],
  };

  