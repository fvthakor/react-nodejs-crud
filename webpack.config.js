const path = require('path');

module.exports = {
  entry: './server.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, './my-app/dist'),
    filename: 'server.bundle.js'
  }
};