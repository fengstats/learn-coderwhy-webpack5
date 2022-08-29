const { resolve } = require('path')

// 每次打包前,清理目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 指定生成html模板J
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 1. 设置使用哪些插件来对代码进行转换
            // plugins: [
            //   // 箭头函数
            //   '@babel/plugin-transform-arrow-functions',
            //   // 块级作用域
            //   '@babel/plugin-transform-block-scoping'
            // ],
            // 2. 直接设置预设: 多个插件的组合，根据我们的目标浏览器使用 .browserslistrc 文件配置
            presets: '@babel/preset-env'
          }
        }
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
