const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  devServer: {
    hot: true,
    historyApiFallback: true,
  },

  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },

  module: {
    rules: [],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
  ],
}
