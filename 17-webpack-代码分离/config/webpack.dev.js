const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { createWorkDir } = require('./paths')

// 开发文件配置
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

  // output: {
  //   // 设置分离文件打包格式
  //   chunkFilename: '[name].[hash:6].chunk.js',
  // },

  // optimization: {
  //   chunkIds: 'deterministic',
  // },

  devServer: {
    // hot: 'only',
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      '@': createWorkDir('./src'),
      pages: createWorkDir('./src/pages'),
    },
  },

  plugins: [
    // React HMR
    new ReactRefreshWebpackPlugin(),
  ],
}
