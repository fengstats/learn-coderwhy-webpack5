const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  // 默认为 false
  // true：开启代码监听
  // watch: true,

  entry: './src/index.js',

  devtool: 'cheap-module-source-map',

  // 专为 webpack-dev-server 的配置
  devServer: {
    hot: true,
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // 配置 React HMR
            plugins: ['react-refresh/babel'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
    // 配置 React HMR
    new ReactRefreshWebpackPlugin(),
  ],
}
