const { resolve } = require('path')

// 这两种写法没有什么区别,怎么简单怎么来
const outputPath = resolve(__dirname, 'dist')
// const outputPath = resolve(__dirname, './dist')

// console.log(outputPath)

module.exports = {
  // 入口配置项
  entry: './src/index.js',

  // 打包配置项
  output: {
    // TIP: 必须是一个绝对路径,否则会报错
    path: outputPath,
    filename: 'bundle.js'
  },

  // 模块配置项
  module: {
    // 模块对应文件匹配规则设置
    rules: [
      {
        // 匹配文件资源
        test: /\.css$/,
        // TIP: 简写形式,当你这个module只需要一个loader处理时可以这么写
        // loader: 'css-loader'
        // TIP: 需要注意use数组中的loader顺序问题,从下往上依次进行处理
        use: [
          'style-loader',
          'css-loader',
          // 也是下面写法的简写形式,不需要额外的options参数时可以这么写
          // { loader: 'css-loader' },
          'postcss-loader'
          // TIP: 因为 .css 以及 .less 都需要使用 postcss-loader,所以以下配置全部抽离至 postcss.config.js 中
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       // 需要依赖的插件
          //       plugins: [
          //         // postcss-preset-env 中已经包含了 autoprefixer 的内容,所以在此可以注释掉
          //         // require('autoprefixer'),
          //         // require('postcss-preset-env'),
          //         // 间写: 如果是 require() 后还需要调用某些信息则无法省略
          //         'postcss-preset-env'
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  }
}
