var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './script.js',
  output: {
    path: __dirname,
    filename: "./script.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/index.html',
      hash: true, // enable cache busters
    })
  ]
};