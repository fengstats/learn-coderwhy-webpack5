const { resolve } = require('path')

// 每次打包前,清理目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 指定生成html模板J
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode默认不设置的情况下是production,代码打包将会被丑化(压缩)
  // 可选值有：'none' | 'development' | 'production'
  mode: 'production',
  // mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  // entry: './src/commonIndex.js',
  // entry: './src/esIndex.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'custom title'
    })
  ]
}
