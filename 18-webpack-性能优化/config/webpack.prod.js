const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { createWorkDir } = require('./paths')

// 生产文件配置
module.exports = {
  mode: 'production',

  output: {
    filename: '[name].bundle.js',
    path: createWorkDir('./dist'),
    chunkFilename: '[name].[hash:6].chunk.js',
  },

  optimization: {
    chunkIds: 'deterministic',
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
          filename: '[id]_vendor_chen.js',
        },
      },
    },
  },

  plugins: [new CleanWebpackPlugin()],
}
