const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')

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
    runtimeChunk: {
      name: 'runtime',
    },
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
      // 设置 html 模板
      template: './index.html',
      // 控制 css/js 文件要不要注入到 html 中，注入到哪个位置
      // head | body
      inject: true,
      // 当文件没有发生任何改变时，使用之前的缓存
      cache: true,
      // 压缩优化
      minify:
        mode === 'production'
          ? {
              // 是否要移除 html 中的注释信息
              removeComments: true,
              // 是否移除一些多余属性：如 <input type="text">，type 默认值就是 tex，可以移除
              removeRedundantAttributes: true,
              // 是否移除一些空属性：如 <input id="">，这个 id 无值，所以没有意义
              removeEmptyAttributes: true,
              // 是否移除全部空格
              collapseWhitespace: true,
              // 删除 link 标签的空属性
              removeStyleLinkTypeAttributes: true,
              // 要不要对 html 代码里面的 style 代码进行压缩
              minifyCSS: true,
              // 是否对 html 里面的 js 进行压缩
              minifyJS: {
                mangle: {
                  // 代码丑化且更换变量
                  toplevel: true,
                },
              },
            }
          : false,
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
    // @ts-ignore
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime.*\.js/]),
  ],
}
