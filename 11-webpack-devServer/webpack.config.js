const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'none',
  // 默认为 false
  // true：开启代码监听
  // watch: true,

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
  ],
}
