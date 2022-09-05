const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

// 测试使用
// let mode = 'development'
let mode = 'production'

module.exports = {
  mode,
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    usedExports: false,
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          // mangle: true,
          // toplevel: true,
          // keep_classnames: true,
          // compress: {
          //   arguments: true,
          //   arrows: true,
          // },
        },
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        sideEffects: true,
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new CssMinimizerWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tree Shaking',
      // 设置模板
      template: './index.html',
    }),
    new CompressionPlugin({
      // 压缩阈值：达到多少才进行压缩
      threshold: 0,
      // 规则匹配：html 或者 .map 文件我们是不需要进行压缩的
      test: /\.(css|js)$/i,
      // 最小压缩比例：（压缩文件大小/源文件大小）默认值为 0.8，高于这个比例就不会进行压缩了
      minRatio: 0.8,
      // 压缩算法
      algorithm: 'gzip',
      // 排除哪些文件
      // exclude
      // 包括哪些文件
      // include
    }),
  ],
}
