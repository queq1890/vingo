const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');

module.exports = withTypescript({
  webpack(config, options) {
    // maybe we need to add this options when we use src/components dir
    // config.resolve.alias = {
    //   '~': './src'
    // };

    // typetyeckする
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }

    return config;
  }
});
