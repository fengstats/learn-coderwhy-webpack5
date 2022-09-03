const path = require('path')
const { DllPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
  },

  output: {
    path: path.resolve(__dirname, './dll'),
    filename: 'dll_[name].js',
    library: 'dll_[name]',
  },

  optimization: {
    minimizer: [
      // 去除打包后的 .LICENSE.tx 文件
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new DllPlugin({
      name: 'dll_[name]',
      // 可以根据 manifest 找对应的 DLL 库
      path: path.resolve(__dirname, './dll/[name].manifest.json'),
    }),
  ],
}
