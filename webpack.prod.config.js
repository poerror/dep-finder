const path = require('path');

const DIST_DIR = path.join(__dirname, '/dist');
const CLIENT_DIR = path.join(__dirname, '/src/client');

module.exports = {
  mode: 'production',
  entry: {
    main: CLIENT_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  plugins: [
  ]
};
