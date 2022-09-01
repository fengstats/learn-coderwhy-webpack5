const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// 开发文件配置
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: 'only',
    historyApiFallback: true,
  },
  plugins: [
    // React HMR
    new ReactRefreshWebpackPlugin(),
  ],
}
