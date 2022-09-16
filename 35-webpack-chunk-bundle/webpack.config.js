const path = require('path')

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  entry: {
    index: './src/index.js',
    // common: './src/common.js',
    other: './src/add.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  // 优化
  optimization: {
    // 浏览器运行时，webpack 用来连接模块化的应用程序的所有代码，在模块交互时，连接模块所需的加载与解析逻辑
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        // 公共的 chunk
        common: {
          chunks: 'initial',
          name: 'common',
          // 被至少两个 chunk 用到了，那么就会被提出成一个 chunk
          minChunks: 2,
          minSize: 0,
        },
        // 第三方 chunk 拆分
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
}
