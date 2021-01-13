const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: '../AIS-home-assistant-polymer/src/panels/lovelace/cards/hui-ais-mini-media-player-card.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true,
  },
};
