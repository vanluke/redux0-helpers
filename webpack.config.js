const path = require('path');
const loaders = require('./webpack-config/loaders');
const plugins = require('./webpack-config/plugins');

const srcDir = 'src';
const outputDir = 'lib'; 
const entry = [`./${srcDir}/main.ts`];

module.exports = {
  devtool: 'source-map',
  entry,
  output: {
    path: `${__dirname}/${outputDir}`,
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: [
      path.resolve(srcDir),
      'node_modules',
    ],
  },

  plugins,
  module: {
    rules: loaders,
  },
};
