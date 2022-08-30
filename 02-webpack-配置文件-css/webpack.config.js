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
    filename: 'bundle.js',
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
          // 也是下面写法的简写形式,不需要额外的options参数时可以这么写
          // 'css-loader',
          {
            loader: 'css-loader',
            options: {
              // importLoaders 的数量取决于需要重复处理的 loaders 数量
              importLoaders: 1,
            },
          },
          'postcss-loader',
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
        ],
      },
      {
        test: /\.less$/,
        // 样式处理流程:
        // 1. 使用 less-loader 将 .less 文件转化为 .css 文件
        // 2. 使用 postcss-loader 将 .css 文件中的内容根据所使用到的 plugin 进行处理
        // 3. 使用 css-loader 处理 css 文件中的样式语法
        // 4. 使用 style-loader 将样式映射到网 页中
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
    ],
  },
}
