const { createWorkDir } = require('./paths')

// 开发文件配置
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
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

  plugins: [],
}
