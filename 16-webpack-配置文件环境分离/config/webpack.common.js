const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const envConfig = require('./webpack.dev.js')
const prodConfig = require('./webpack.prod.js')
const { createWorkDir } = require('./paths')

// 公共 webpack 配置
const commonConfig = {
  // 这里可以直接 ./ 寻找 index.js 入口文件的原因是
  // entry 是根据 context 上下文路径寻找的，而 context 的默认值就是 package.json 所在的根目录
  entry: './src/index.js',
  // 基础目录（绝对路径）：当然我们可以对它重新赋值，但是同样的 entry 也要更改对应路径信息
  // context: path.resolve(__dirname, '../'),
  output: {
    filename: 'bundle.js',
    // 因为这里与根目录的距离是 ../ 所以我们设置打包目录的绝对路径的时候需要向上返回一层目录
    // path: path.resolve(__dirname, '../dist'),
    path: createWorkDir('./dist'),
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      // '@': path.resolve(__dirname, '../src'),
      // pages: path.resolve(__dirname, '../src/pages'),
      '@': createWorkDir('./src'),
      pages: createWorkDir('./src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        // 正则
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack title',
      template: './index.html',
    }),
  ],
}

// tip: 这里导出一个函数，不然无法接收 env 这个参数
module.exports = (env) => {
  // console.log(env) // env = { WEBPACK_BUNDLE: true, WEBPACK_BUILD: true, development: true }
  // 因为我们在 package.json 启动项中传入了 --env=development 所以接收的这个对象就多了 development 这个属性为 true
  // - 通过 development === true 判断是否是开发环境
  // - 通过 production === true 判断是否是是生产环境，选一即可
  // const isDevelopment = env.development
  const isProduction = env.production

  // tip：貌似赋值给 process.env.xxx 的变量，最后类型都会变成 string（字符串）
  // 这里测试了一下，确实会这样，可能是 webpack 或者 node 内部进行赋值的一些处理？
  // process.env.NODE_ENV = false
  process.env.NODE_ENV = isProduction ? 'production' : 'development'

  console.log('环境：', process.env.NODE_ENV)

  // 根据环境判断合并配置
  return merge(commonConfig, isProduction ? prodConfig : envConfig)
}
