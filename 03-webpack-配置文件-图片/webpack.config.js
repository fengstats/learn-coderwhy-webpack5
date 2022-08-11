const { resolve } = require('path')
const outputPath = resolve(__dirname, 'dist')

module.exports = {
  // 入口配置项
  entry: './src/index.js',

  // 打包配置项
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },

  // 模块配置项
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',

          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      },
      // 处理文件
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              // 图片名称: [] 内可以写 placeholder
              // [ext]: 处理文件的扩展名
              // [name]: 处理文件的名称
              // [hash]: 文件的内容,使用MD4的散列函数处理,生成的一个128位bit的hash值(32个十六进制)
              // [contentHash]: 在 file-loader 中和 [hash] 结果是一致的
              // [hash:<length>]: 截取hash的长度设置
              // [path]: 文件相对于 webpack 配置文件的路径
              // img/ 等同下面的 outputPath
              // outputPath: 'img'
              name: 'img/[name]_[hash:6].[ext]',
              // 单位为byte,限制多大字节内的图片可以做转换
              limit: 100 * 1024
            }
          }
        ]
      }
    ]
  }
}
