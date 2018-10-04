const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
    transformer: {
      babelTransformerPath: require.resolve("react-native-typescript-transformer")
    },
    watchFolders: [
      path.resolve(__dirname, "../.."),
      ],
  };

  