import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: '/home/andrzej/Projects/AIS-home-assistant-polymer/src/panels/lovelace/cards/hui-ais-mini-media-player-card.js',
    format: 'umd',
    name: 'MiniMediaPlayer',
  },
  plugins: [
    resolve(),
  ],
};
