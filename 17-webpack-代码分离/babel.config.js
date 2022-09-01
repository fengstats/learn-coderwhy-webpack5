// 环境
const NODE_ENV = process.env.NODE_ENV
// 预设
const presets = [
  [
    '@babel/preset-env',
    {
      // polyfill
      // useBuiltIns: 'usage',
      // corejs: 3,
    },
  ],
]

// 插件
const plugins = []

if (NODE_ENV === 'development') {
  plugins.push('react-refresh/babel')
}

console.log('\n\nbabel.config.js', NODE_ENV, typeof NODE_ENV, '\n\n')

module.exports = {
  presets,
  plugins,
}
