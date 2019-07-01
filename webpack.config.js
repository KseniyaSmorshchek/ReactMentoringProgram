const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',

  // devtool: process.env.NODE_ENV === 'production' ? 'none' : 'source-map',

  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
  },

  resolve: {
      extensions: ['.js', '.jsx']
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)?$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          },
          {
              test: /\.scss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },

  plugins: [
      new HtmlWebpackPlugin({
          template: "../public/index.html"
      })
  ],
  devServer: {
      stats: 'errors-only'
  },

  watch: true
};