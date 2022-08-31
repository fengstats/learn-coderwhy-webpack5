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
        // vue-loader 加载的组件默认会帮助我们进行 HMR 的处理
        use: 'vue-loader',
      },
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
    new VueLoaderPlugin(),
  ],
}
