const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
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
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
}
