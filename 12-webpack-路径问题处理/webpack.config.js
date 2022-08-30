const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // 这个参数用于和打包后的静态资源进行一个路径拼接
    // 若想直接本地打包后打开 index.html 看到相关资源效果，可以设置为 ./ 或者不写
    // 若以静态资源服务部署，则使用 / 或者不写
    // publicPath: '/',
  },

  // 专为 webpack-dev-server 的配置
  devServer: {
    // 设置主机地，默认值是 localhost
    // localhost: 本质上是一个域名，通常情况下会被解析成 127.0.0.1
    // 127.0.0.1：回环地址（Loop Back Address），我们主机自己发出去的包，直接被自己接收
    // - 正常的数据包流向 应用层 -> 传输层 -> 网络层 -> 数据链路层 -> 物理层
    // - 而回环地址，是在网络层就直接被获取到了，不会经过链路层和物理层
    // - 比如我们监听 127.0.0.1 时，同一个网段下的主机中，通过 ip 地址是不能进行访问的
    // 0.0.0.0：监听 IPV4 上所有的地址，再更具端口找到不同的应用程序
    // - 比如我们监听 0.0.0.0 时，在同一个网段下，通过 ip 地址是可以访问到的
    host: '0.0.0.0',
    // 端口：默认 8080
    port: 8080,
    // 是否自动打开默认浏览器：默认为 true
    open: true,
    // 性能优化，是否为静态文件开启 gzip compression：默认值为 false
    compress: true,
    // 是否进行热更新 HMR
    // only: 等同与 hotOnly = true
    hot: 'only',
    // 如何项目出现源代码错误报错后修复
    // 当 hotOnly 为 false 时，浏览器会刷新，此时保留的一些状态信息也会刷新
    // 当 hotOnly 为 true 时，浏览器只会更新错误的一部分内容
    // todo: 貌似这个属性现在已经不能用了，应该添加到 hot 内变成一个参数了
    // hotOnly: true,
    // 开发时静态资源服务的路径拼接，建议与 output.publicPath 保持一致
    // publicPath: '',
    // todo: 后面遇到再看，还是有点懵
    // contentBase: path.resolve(__dirname, './')
    // 监听 contentBase 目录下的资源是否变更，变更后直接刷新浏览器
    // watchContentBase: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: ['react-refresh/babel'],
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
    // new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
}
