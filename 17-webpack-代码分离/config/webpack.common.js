const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const envConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const { createWorkDir } = require('./paths')

// 公共 webpack 配置
const commonConfig = {
  // entry: './src/index.js',
  // 在开发模式下更改代码内容保存后提示打包文件 undefined 并报错
  // 使用下面这种多入口的方式解决上面的报错
  // entry: ['./src/index.js', './src/main.js'],
  // entry: {
  //   // 1. 多文件基础写法
  //   index: './src/index.js',
  //   main: './src/main.js',
  //   // 2. 因为两个入口文件都引入了 lodash 这个库，在打包时就会打包两份 lodash 源码
  //   // 所以我们需要将这个模块单独引入
  //   // lodash: 'lodash',
  //   // dayjs: 'dayjs',
  //   // shared: ['lodash', 'dayjs'],
  //   // 然后给入口文件设置依赖：这样进行打包后就会生成一个 lodash.bundle.js 的包了
  //   // index: { import: './src/index.js', dependOn: 'shared' },
  //   // main: { import: './src/main.js', dependOn: 'shared' },
  // },

  entry: {
    // 1. 多文件基础写法
    index: './src/index.js',
    main: './src/main.js',
  },

  output: {
    // filename: 'bundle.js',
    // 因为多入口的原因，需要配置不同的打包文件
    filename: '[name].[chunkhash:6].bundle.js',
    path: createWorkDir('./dist'),
    // 设置分离文件打包格式
    chunkFilename: '[name].[chunkhash:6].chunk.js',
  },

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
