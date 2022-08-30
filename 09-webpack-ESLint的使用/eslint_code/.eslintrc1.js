module.exports = {
  // 环境支持：ESLint 检测的代码运行在什么环境上
  env: {
    // 浏览器
    browser: true,
    // 是否会使用 CommonJS 相关规范J
    commonjs: true,
    // 支持哪些 ES 特性，2021 前的都支持
    es2021: true
  },

  overrides: [],

  // 使用什么 JS 编译器进行解析，默认就是 espree
  // parser: 'espree',

  parserOptions: {
    // 指定 ES 对应版本
    ecmaVersion: 'latest'
  },

  // 规则定义
  rules: {}
}
