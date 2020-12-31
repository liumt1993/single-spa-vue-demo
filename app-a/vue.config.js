// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  chainWebpack: (config) => {
    config.devServer.set('inline', false);
    config.devServer.set('hot', true);
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== 'production') {
      config.output.filename(`js/[name].js`);
    }
    config.output.libraryTarget('system');
    // config.externals(['vue', 'vue-router']);
  },
  filenameHashing: false,
};
