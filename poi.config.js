const antdVars = require('./src/styles/antd-vars');

module.exports = {
  entry: [
    // 'src/registerServiceWorker',
    'src/index'
  ],

  output: {
    html: {
      title: 'Starter'
    }
  },

  plugins: [
    // {
    //   resolve: '@poi/plugin-eslint'
    // },
  ],

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: antdVars
      }
    }
  },

  configureWebpack: {
    node: {
      fs: 'empty'
    }
  }
};
