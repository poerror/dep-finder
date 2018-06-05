const path = require('path');

module.exports = {
  dir: {
    dist: path.join(__dirname, '/dist'),
    client: path.join(__dirname, '/src/client'),
    server: path.join(__dirname, '/src/server')
  },
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
};
