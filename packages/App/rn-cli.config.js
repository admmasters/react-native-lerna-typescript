var path = require("path");
const metroBundler = require('metro-bundler');

var config = {
  extraNodeModules: {
    "react-native": path.resolve(__dirname, "node_modules/react-native"),
  },
  getProjectRoots() {
    return [
      // Keep your project directory.
      path.resolve(__dirname),
      path.resolve(__dirname, "../../"),
    ];
  },
  getBlacklistRE: function() {
    return metroBundler.createBlacklist([
        /USER[/\\]PATH[/\\]TOLIBRARY[/\\]node_modules[/\\]react-native[/\\].*/
    ]);
  }
}
module.exports = config;