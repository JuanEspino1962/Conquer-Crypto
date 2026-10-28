const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: { directory: __dirname },
    devMiddleware: { publicPath: '/' },
    hot: false,
    liveReload: true,
    port: 8080,
  },
});
