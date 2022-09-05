const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

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
    // 将未使用的代码添加一段注释标记
    usedExports: true,
    // 是否开启压缩优化 Terser
    minimize: true,
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
    // new webpack.optimize.ModuleConcatenationPlugin(),

    // @ts-ignore
    new PurgecssPlugin({
      // 匹配 src 目录下的所有文件（包括 js）
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      // 默认情况下，purgecss 会将我们的 html 标签样式移除掉，如果希望保留，可以添加下面这个属性
      safelist: () => {
        return {
          standard: ['html'],
        }
      },
    }),
  ],
}
