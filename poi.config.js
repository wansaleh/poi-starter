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

  configureWebpack: {
    node: {
      fs: 'empty'
    }
  }
};
