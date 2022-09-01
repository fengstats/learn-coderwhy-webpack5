const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const envConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
// const { createWorkDir } = require('./paths')

// 公共 webpack 配置
const commonConfig = {
  entry: ['./src/index.js', './src/main.js'],
  // entry: {
  //   index: './src/index.js',
  //   main: './src/main.js',
  // },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
  ],
}

module.exports = (env) => {
  const isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  console.log('环境：', process.env.NODE_ENV)

  // 根据环境判断合并配置
  return merge(commonConfig, isProduction ? prodConfig : envConfig)
}
