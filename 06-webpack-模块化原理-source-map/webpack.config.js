const { resolve } = require('path')

// 每次打包前,清理目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 指定生成html模板J
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode默认不设置的情况下是production,代码打包将会被丑化(压缩)
  // 可选值有：'none' | 'development' | 'production'
  // mode: 'production',
  // 生产模式下,默认为 none
  // devtool: 'none',
  mode: 'development',
  // 开发模式下,默认为 eval,不生成 source-map 文件,但是相关代码会被放到 eval 函数中,并且在最后加上 source-map 注释,主要作用是为了还原代码对应j文件
  // devtool: 'eval',
  // 不生成 source-map
  // devtool: false,
  // 会生成 source-map 文件且报错信息提示最全的
  // devtool: 'source-map',
  // mode = development 模式下的默认值，不生成 source-map 文件，但是它会生成使用 eval 函数包裹的代码，在其最后添加 source-map，它会被浏览器在执行时解析，并且在调试面板中生成对应的一些目录文件，方便调试
  // devtool: 'eval-source-map',
  // 不会生成 source-map 文件，但是 source-map 以 DataURL 形式添加到打包文件的最后
  // devtool: 'inline-source-map',
  // 会生成 source map 文件，基本与 source-map 一致，但是没有列映射 column mapping（报错信息不会精确到列）的 source map，忽略 loader source map
  // devtool: 'cheap-source-map',
  // 会生成 source map 文件，基本与 cheap-source-map 一致，但是对于源自 loader 的 source map 处理会更好（比如我们使用 babel 进行转换后的代码 es6 -> es5，cheap-source-map 在处理报错信息时，展示的代码可能是转换后的代码，会导致具体报错的位置信息又差异，cheap-module-source-map 不会）
  // devtool: 'cheap-module-source-map',
  // 会生成 source map 文件，基本与 source-map 一致，但不会打包文件添加引用注释。如果你只想 source map 映射那些源自错误报告的错误堆栈跟踪信息，但不想为浏览器开发工具暴露你的 source map，这个选项会很有用
  // devtool: 'hidden-source-map',
  // 会生成
  devtool: 'nosources-source-map',
  entry: './src/index.js',
  // entry: './src/commonIndex.js',
  // entry: './src/esIndex.js',
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
            // es6 语法转 es5
            presets: ['@babel/preset-env']
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
