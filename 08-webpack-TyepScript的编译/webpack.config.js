const { resolve } = require('path')

// 每次打包前,清理目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 指定生成html模板J
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        // 排除匹配规则
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'custom title'
    })
  ]
}
