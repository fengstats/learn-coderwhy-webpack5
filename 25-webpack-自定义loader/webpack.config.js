const path = require('path')

module.exports = {
  mode: 'development',
  // 相对于 context
  entry: './src/main.js',
  context: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  resolveLoader: {
    // loader 路径查找的问题，默认是只配置了 node_modules
    // 所以在查找模块的时候才会先去 node_modules 中查找
    modules: ['node_modules', './loaders'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 相对于 context
        // use: './loaders/coderlazy-loader',
        // 在 resolveLoader.modules 中配置了自己 loader 目录，就可以省略掉一些相对路径的引入了
        use: 'coderlazy-loader',
      },
    ],
  },
}
