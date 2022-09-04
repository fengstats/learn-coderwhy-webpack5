const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
  ],
}
