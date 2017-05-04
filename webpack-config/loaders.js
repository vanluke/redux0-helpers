const ts = {
  test: /\.ts?$/,
  use: [
    'ts-loader',
  ],
  exclude: /node_modules/,
};

const tslint = {
  test: /\.ts$/,
  enforce: 'pre',
  loader: 'tslint-loader',
};
module.exports = [tslint, ts];
