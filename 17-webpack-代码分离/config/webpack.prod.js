const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 生产文件配置
module.exports = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
}
