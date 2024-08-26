const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/RumTibet/' : '/RumTibet/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'RumTibet';
      return args;
    });
  },
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /^\/RumTibet/, to: '/' }
      ]
    },
  }
});