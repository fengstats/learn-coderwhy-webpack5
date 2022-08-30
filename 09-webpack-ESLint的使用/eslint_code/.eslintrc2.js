module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },

  // 继承其他规则
  extends: [
    // eslint 推荐规则
    'eslint:recommended',
    // react 推荐规则
    'plugin:react/recommended',
    // typescript 推荐规则
    'plugin:@typescript-eslint/recommended'
  ],

  overrides: [],

  // 选择编译/解释器解析
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 使用到的插件
  plugins: ['react', '@typescript-eslint'],
  rules: {}
}
