const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // 相对于 context
  entry: './src/main.js',
  devtool: 'source-map',
  context: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolveLoader: {
    // loader 路径查找的问题，默认是只配置了 node_modules
    // 所以在查找模块的时候才会先去 node_modules 中查找
    modules: ['./node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'lazybabel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.md$/i,
        use: 'lazymd-loader',
        // use: ['html-loader', 'lazymd-loader'],
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      // {
      //   test: /\.js$/,
      //   // 相对于 context
      //   // use: './loaders/coderlazy-loader',
      //   // 在 resolveLoader.modules 中配置了自己 loader 目录，就可以省略掉一些相对路径的引入了
      //   // 执行顺序：从右往左、从下往上
      //   use: ['coderlazy-loader01', 'coderlazy-loader02', 'coderlazy-loader03'],
      // },
      // {
      //   test: /\.js$/i,
      //   use: 'coderlazy-loader01',
      // },
      // {
      //   test: /\.js$/i,
      //   use: 'coderlazy-loader02',
      //   // pre：PitchLoader 最后加载，NormalLoader 最先加载
      //   // post: 与 pre 相反
      //   enforce: 'post',
      // },
      // {
      //   test: /\.js$/i,
      //   use: 'coderlazy-loader03',
      // },

      // 传入一些额外的参数 options
      // {
      //   test: /\.js$/i,
      //   use: {
      //     loader: 'coderlazy-loader02',
      //     options: {
      //       name: 'xiaochen',
      //       age: 18,
      //       // age: '18',
      //     },
      //   },
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
