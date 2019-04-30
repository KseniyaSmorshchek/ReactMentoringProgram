const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',

  // devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',

  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
  },

  resolve: {
      extensions: ['.js']
  },

  module: {
      rules: [
          {
              test: /\.jsx?$/,
          }
      ]
  },

    watch: false
};