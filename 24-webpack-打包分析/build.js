const webpack = require('webpack')
// 引入配置文件的入口函数
const configFunc = require('./config/webpack.common.js')

// 我们需要传入 env 参数
const config = configFunc({ production: true })

// 通过 webpack 来执行编译
const compiler = webpack(config)

// 调用 run 方法来开始执行
compiler.run((err, stats) => {
  if (err) {
    console.log('webpack build 执行失败')
  } else {
    console.log('webpack build', stats)
  }
})
