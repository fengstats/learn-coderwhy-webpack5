const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/',
  },

  // 专为 webpack-dev-server 的配置
  devServer: {
    // host: '0.0.0.0',
    // port: 8080,
    // open: true,
    // compress: true,
    hot: 'only',
    // publicPath: '',
    // contentBase: path.resolve(__dirname, './')
    // watchContentBase: true,
    // 请求代理：只在本地开发有效，部署后无效
    proxy: {
      '/chen': {
        // 需要代理的服务器地址J
        // 这样的话 /chen/ip 的请求会将请求代理到 https://httpbin.org/chen/ip
        target: 'https://httpbin.org',
        // 替换字符串/标识字符
        // 将实际请求链接中的 /chen 替换为空字符串，因为实际的的接口可能没有这个标识字符
        pathRewrite: { '^/chen': '' },
        // 默认情况下，将不接受在 HTTPS 上运行且证书无效的后端服务器，如果需要：设置为 false
        secure: false,
        // 让服务器收到的请求头中 host 是上面的目标地址 target，默认情况下是本地服务的 host+port
        changeOrigin: true,
      },
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
        use: 'vue-loader',
      },
      {
        test: /\.jsx?$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
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
    new VueLoaderPlugin(),
  ],
}
