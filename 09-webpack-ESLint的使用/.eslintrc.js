module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  extends: ['plugin:vue/vue3-essential', 'standard-with-typescript'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    // 未使用的变量:
    // 0 -> off -> 关闭
    // 1 -> warn -> 警告
    // 2 -> error -> 错误
    'no-unused-vars': 'warn',
    // 打包的时不希望有输出函数
    'no-console': 'off',
  },
}
