module.exports = {
    devServer: {
      proxy: 'https://www.stage.njls.com/'
    },
    chainWebpack: config => {
      config.performance
        .maxEntrypointSize(400000)
        .maxAssetSize(400000)
    }
  }