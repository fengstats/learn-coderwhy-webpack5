const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'chen_utils.js',
    // 打包支持的目标环境
    // umd：AMD/CommonJS/浏览器都可以支持，会自动根据环境判断
    libraryTarget: 'umd',
    // 打包名称，设置后 webpack 会绑定到 window 对象中，即可以在浏览器中拿到并操作对应属性和方法
    library: 'chenUtils',
    // 全局挂载对象指定：this 就是 window 或者 document
    globalObject: 'this',
  },
}
