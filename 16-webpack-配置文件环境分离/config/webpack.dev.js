const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// 开发文件配置
module.exports = {
  // 这里设置了 development 之后，webpack 会使用 DefinePlugin 设置 process.env.NODE_ENV 的值设置为 development
  // production 同理，这样我们就可以在一些开发的 js 文件中判断环境变量了
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: 'only',
    historyApiFallback: true,
  },
  plugins: [
    // React HMR
    // new ReactRefreshWebpackPlugin(),
  ],
}
