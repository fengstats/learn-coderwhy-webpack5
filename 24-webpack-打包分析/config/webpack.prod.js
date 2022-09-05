const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { createWorkDir } = require('./paths')

// 生产文件配置
module.exports = {
  mode: 'production',

  output: {
    path: createWorkDir('./dist'),
    filename: 'js/[name].[hash:6].bundle.js',
    chunkFilename: 'js/[name].[contenthash:6].chunk.js',
  },

  // 排除指定模块打包
  externals: {
    // 模块名: 暴露变量
    lodash: '_',
    dayjs: 'dayjs',
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [MiniCssExtractPlugin.loader, 'css-loader'],
  //     },
  //   ],
  // },

  optimization: {
    chunkIds: 'deterministic',
    // 配置为 true 或者 'multiple 效果一样
    // runtimeChunk: true,
    runtimeChunk: {
      // 自己定义打包前缀
      name: 'custom-chen',
      // name: (entrypoint) => {
      //   // 结合入口文件名称
      //   return `custom-${entrypoint.name}`
      // },
    },
    minimizer: [
      new TerserPlugin({
        // 去除打包后的 .LICENSE.txt 文件
        extractComments: false,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      // (8 * 1024 * 1)bit === 1KB
      // minSize: 8 * 1024 * 20,
      // 为了测试，匹配我们自己写的包
      minSize: 80,
      maxSize: 8 * 1024 * 250,
      minChunks: 1,
      // 缓存组
      cacheGroups: {
        // 默认
        default: {
          minChunks: 2,
          filename: '[id]_chunk2.js',
          // 优先级：比如两个都满足条件，值越大优先级越高
          priority: 3,
        },
        code: {
          // 匹配文件
          test: /chen_/,
          filename: '[id]_chen.js',
          priority: 2,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[id]_vendor_chen.js',
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    // tip: smp 兼容问题
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
}
