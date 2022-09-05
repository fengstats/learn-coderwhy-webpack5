// 环境
const NODE_ENV = process.env.NODE_ENV
// 预设
const presets = [['@babel/preset-env']]

// 插件
const plugins = []

console.log('\n\nbabel.config.js', NODE_ENV, typeof NODE_ENV, '\n\n')

module.exports = {
  presets,
  plugins,
}
