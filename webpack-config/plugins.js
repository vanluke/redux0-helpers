const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  new CleanWebpackPlugin(['lib'], {
    root: path.resolve(__dirname, '..'),
    verbose: true,
    dry: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    include: /\.min\.js$/,
    sourceMap: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }),
];
