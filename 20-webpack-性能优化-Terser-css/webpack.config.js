const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  // 因为在 production 模式下打包默认会使用 TerserPlugin 插件进行，所以我们使用 development 模式来查看效果
  mode: 'development',
  // mode: 'production',
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    // 是否开启压缩优化
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 是否需要单独抽离文件注释
        extractComments: false,
        terserOptions: {
          mangle: true,
          toplevel: true,
          // 设置 true 没有生效的原因是因为
          // 打包后的代码是在闭包内，不在全局/顶级作用域下
          keep_classnames: true,
          compress: {
            arguments: true,
            arrows: true,
          },
        },
      }),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
    new CssMinimizerWebpackPlugin(),
    // 作用域提升
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
}
