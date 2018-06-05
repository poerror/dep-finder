const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../../webpack.config.js');
const appConfig = require('../../config');

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));

if (appConfig.env === 'development') {
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(appConfig.dir.dist));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(appConfig.dir.dist, 'index.html'));
// });

app.listen(appConfig.port, function() {
  console.log(`Server running on port ${appConfig.port} in ${appConfig.env} mode.`);
});
