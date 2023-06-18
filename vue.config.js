const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {   //360接口跨域
        target: 'https://bang.360.cn',
        // ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/myzl': {
        target: 'https://www.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/myzl':''
        }
      },
      '/coun': {
        target: 'https://place.qyer.com',
        changeOrigin: true,
        pathRewrite:{
          '^/coun':''
        }
      },
    }
  }
})
