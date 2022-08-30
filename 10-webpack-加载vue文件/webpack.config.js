const { resolve } = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: './js/bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(jsx?|)$/,
        use: 'babel-loader',
        // 排除匹配规则
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },

  // 插件
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'custom title',
    }),
  ],
}
