// @ts-ignore
const { merge } = require('webpack-merge')
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 可视化查看包大小分析插件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const envConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
// const { createWorkDir } = require('./paths')

// 分析打包时间的插件
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasureWebpackPlugin()

// 公共 webpack 配置
const commonConfigFunc = (isProduction) => {
  return {
    entry: ['./src/index.js', './src/main.js'],
    // entry: {
    //   index: './src/index.js',
    //   main: './src/main.js',
    // },
    module: {
      rules: [
        {
          test: /\.css$/,
          // todo: smp 兼容问题
          // use: ['style-loader', 'css-loader'],
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
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
      // 当代码中遇到某个变量 undefined 时，此插件会自动导入对应的库
      new ProvidePlugin({
        // 变量名称: 对应的依赖库
        axios: 'axios',
        // ['依赖库', '依赖库中的方法或者属性']
        get: ['axios', 'get'],
      }),
      new BundleAnalyzerPlugin(),
    ],
  }
}

module.exports = (env) => {
  const isProduction = env.production
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  console.log('环境：', process.env.NODE_ENV)

  // 根据环境判断合并配置
  // return smp.wrap(merge(commonConfigFunc(isProduction), isProduction ? prodConfig : envConfig))
  return merge(commonConfigFunc(isProduction), isProduction ? prodConfig : envConfig)
}
