// react-refresh/babel 这个插件是开发环境所需的（HMR）
// 我们需要想办法拿到当前环境变量，判断是开发环境才添加
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

// 测试发现 process.env.NODE_ENV 是 undefined
// webpack 的配置文件中可以拿到环境变量，我们可以先在 webpack.common.js 中赋值
console.log('\n\nbabel.config.js', NODE_ENV, typeof NODE_ENV, '\n\n')

if (NODE_ENV === 'development') {
  plugins.push('react-refresh/babel')
}

module.exports = {
  presets,
  plugins,
}
