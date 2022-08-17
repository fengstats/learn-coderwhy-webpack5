const { resolve } = require('path')

const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputPath = resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
    // 配置所有 asset 资源路径存放
    // assetModuleFilename: 'img/[name]_[hash:6][ext]'
  },
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
        // 相当于 file-loader
        // type: 'asset/resource',
        // 相当于 url-loader
        // type: 'asset/inline'
        type: 'asset',
        generator: {
          // 配置单个 asset 资源存放
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            // 等同于 url-loader 配置的 limit,工作方式相同
            maxSize: 50 * 1024
          }
        }
      },
      // 处理字体图标资源
      // i: 表示可以忽略大小写
      {
        test: /\.ttf|eot|woff2?/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      }
    ]
  },
  // 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'custom title',
      template: './public/index.html'
    }),
    new DefinePlugin({
      // 需要使用字符串引号包裹起来,否则直接取到./报错
      BASE_URL: '"./"'
    })
  ]
}
