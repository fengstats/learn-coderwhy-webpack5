const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')

const webpackConfig = require('./webpack.config.js')

const app = express()

// 利用 webpack 来执行 webpack.config.js 文件，并拿到其编译数据
const compiler = webpack(webpackConfig)

console.log(compiler)

// 通过中间件解析编译数据
const middleware = WebpackDevMiddleware(compiler)

// 挂载到 app 上
app.use(middleware)

app.listen(3000, () => {
  console.log('端口 3000，服务正在运行中～')
})
