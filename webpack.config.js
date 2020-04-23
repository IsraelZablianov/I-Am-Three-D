var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/scripts/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  }
}