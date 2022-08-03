const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    open:true,
    proxy:{
      // 代理服务器解决跨域
      '/api':{
        target:"http://gmall-h5-api.atguigu.cn",
        // pathRewrit:{''}
      }
    }
  },
  lintOnSave: false,
})
