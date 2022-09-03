const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DllReferencePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    hot: true,
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  optimization: {
    chunkIds: 'deterministic',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          // 来源于第三方库
          test: /[\\/]node_modules[\\/]/,
          filename: 'js/[id]_vendor.js',
        },
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
    // 引入 DLL
    new DllReferencePlugin({
      // 通过 manifest 即可解析到对应的 DLL 库
      manifest: path.resolve(__dirname, './dll/react.manifest.json'),
      context: path.resolve(__dirname, './'),
    }),
    // 插入 html script
    new AddAssetHtmlWebpackPlugin({
      // todo：没加这个参数时打包多了一个 auto 目录，简单看了一下源码里面也没添加这个默认值，不知道在哪加上去的，后面再看
      // 自动插入到 script 标签的路径，需要和输出路径一致
      publicPath: './',
      filepath: path.resolve(__dirname, './dll/dll_react.js'),
    }),
  ],
}
