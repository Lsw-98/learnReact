const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api1', {      // api1是需要转发的请求（所有带有/api前缀的请求都会转发给5000端口）
      target: 'http://localhost:5000',    // 配置转发目标地址（能返回数据的服务器地址）
      changeOrigin: true,                 // 控制服务器接收到的请求头中host字段的值
      /*
        changeOrigin为true时，服务器收到的请求头中的host为：localhost:5000
        changeOrigin为false时，服务器收到的请求头中的host为：localhost:3000
        changeOrigin默认值为false
      */
      pathRewrite: { '^/api1': '' }       // 去除请求前缀/api1，保证交给服务器的请求地址是正确的
    }),
  )
}