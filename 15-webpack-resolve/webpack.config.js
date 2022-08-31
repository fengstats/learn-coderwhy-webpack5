const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },

  // 开发服务
  devServer: {
    hot: true,
    // 解决路由模式为 history 时，切换路由后刷新页面 404 问题
    historyApiFallback: true,
  },

  // 用于设置模块如何被解析
  resolve: {
    // 引入模块从哪些目录进行检索查找
    // modules: ['node_module']
    // 自动填充后缀：可以让我们引入资源文件时省略后缀的编写，webpack 会根据这个配置项中的后缀一一进行匹配，若未匹配到则报错
    // tip: 建议在文件引入时还是要添加上后缀的，一来可以省去 webpack 的匹配查找时间，二来自己看代码的时候也知道引入的到底是什么类型的文件
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    // 配置别名：顾名思义，其实就是替代一下相对路径引入的写法，提前帮你把绝对路径配置好了
    alias: {
      '@': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        // vue-loader 加载的组件默认会帮助我们进行 HMR 的处理
        use: 'vue-loader',
      },
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // 配置 React HMR
            plugins: ['react-refresh/babel'],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
    // 配置 React HMR
    new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
}
