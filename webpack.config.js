const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const appConfig = require('./config');

// webpack common config
let webpackConfig = {
  output: {
    filename: 'bundle.js',
    path: appConfig.dir.dist,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ]
      }
    ]
  }
};

// webpack development config
if (appConfig.env === 'development') {
  webpackConfig = webpackMerge(webpackConfig, {
    mode: 'development',
    entry: ['webpack-hot-middleware/client', `${appConfig.dir.client}/index.js`],
    devtool: 'inline-source-map',
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
}

// webpack production config
if (appConfig.env === 'production') {
  webpackConfig = webpackMerge(webpackConfig, {
    mode: 'production',
    entry: {
      main: `${appConfig.dir.client}/index.js`,
    },
    plugins: []
  });
}

module.exports = webpackConfig;
