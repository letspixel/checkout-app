var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/App.js'
  },
  output: {
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['react']
      }
    },
    {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin("dist/style.css", {allChunks: true}),
  ]
}