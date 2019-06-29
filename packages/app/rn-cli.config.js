const path = require('path');
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-typescript-transformer',
    ),
  },
  watchFolders: [
    // Keep your project directory.
    path.resolve(__dirname),

    // Include arc/root directory as a new root.
    path.resolve(__dirname, '../..'),
  ],
};
