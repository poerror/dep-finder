const path = require('path');
const webpack = require('webpack');

const DIST_DIR = path.join(__dirname, '/dist');
const CLIENT_DIR = path.join(__dirname, '/src/client');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', CLIENT_DIR + '/index.js'],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ]
};
