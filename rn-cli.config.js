var path = require('path');
const metroBundler = require('metro-bundler');

var config = {
  getProjectRoots() {
    return [
      path.resolve(__dirname),
      path.resolve(__dirname, 'packages/App'),
    ];
  },
  extraNodeModules: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-native': path.resolve(__dirname, 'node_modules/react-native'),
  },
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  }
};
module.exports = config;