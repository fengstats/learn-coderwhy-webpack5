// TIP: 用于测试指定 webpack 配置文件
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}
