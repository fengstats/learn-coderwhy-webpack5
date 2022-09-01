const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { createWorkDir } = require('./paths')

// 生产文件配置
module.exports = {
  mode: 'production',

  output: {
    // filename: 'bundle.js',
    // 因为多入口的原因，需要配置不同的打包文件
    filename: '[name].bundle.js',
    path: createWorkDir('./dist'),
    // 设置分离文件打包格式
    chunkFilename: '[name].[hash:6].chunk.js',
  },

  optimization: {
    // natural：使用自然数排序作为名称，不利于浏览器缓存
    // named：使用包所在目录作为 name（开发环境推荐）
    // deterministic：生成 id，针对相同文件的 id 不变（生产环境推荐）
    chunkIds: 'deterministic',
    minimizer: [
      new TerserPlugin({
        // 去除打包后的 .LICENSE.txt 文件
        extractComments: false,
      }),
    ],
    splitChunks: {
      // async：异步导入
      // initial：同步导入
      // all：同时支持同步和异步导入（一般只设置这个就够了）
      chunks: 'all',
      // 最小尺寸：就是如果要拆包，那么这个包最小也得是 minSize/bit
      // 默认值是 20000bit 约等于 20KB
      // (8 * 1024 * 1)bit === 1KB
      // minSize: 8 * 1024 * 60,
      // 为了测试，匹配我们自己写的包
      minSize: 80,
      // 将大于 maxSize 的包，拆分成不小于 minSize 的包
      // 默认值是 0：但是我们不能设置
      maxSize: 8 * 1024 * 250,
      // 引入的包至少被导入了几次，如果低于这个次数则不会拆分包了
      minChunks: 1,
      // 缓存组
      cacheGroups: {
        // 满足匹配条件就进行相关打包
        default: {
          // 引入了几次
          minChunks: 2,
          filename: 'common_[id].js',
          // 优先级：比如两个都满足条件，值越大优先级越高
          priority: 9,
        },
        vendor: {
          // [abc] a 或 b 或 c，满足其中一个条件即可，\\ 表示转义转义符号
          // 目的是用户可能是 win 环境或者 linux 环境，兼容处理
          test: /[\\/]node_modules[\\/]/,
          filename: '[id]_vendor_chen.js',
        },
        code: {
          // 匹配文件
          test: /code_/,
          filename: '[id]_code.js',
          priority: 10,
        },
      },
    },
  },

  plugins: [new CleanWebpackPlugin()],
}
