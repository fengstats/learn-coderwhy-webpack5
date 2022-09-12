import commonjs from '@rollup/plugin-commonjs'
// import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/main.js',
  output: {
    format: 'umd',
    name: 'lazyUtils',
    file: 'dist/bundle.umd.js',
    globals: {
      // 包名: 全局应用对象
      lodash: '_',
    },
  },
  // 排除：如果不想某些第三方依赖打包进输出文件可以设置
  external: ['lodash'],
  plugins: [
    // 可以让我们自己写的代码通过 CommonJS 的方式导出，ES Module 的方式导入
    commonjs(),
    // 可以解决第三方依赖包（node_modules/）引入代码使用，没有将源码打包到输出文件中导致 undefined 的问题
    // nodeResolve(),
    babel({
      // 转换 ES6 语法时，多次转化时只使用一个辅助函数
      babelHelpers: 'bundled',
    }),
    // 对代码进行压缩/丑化
    terser(),
  ],
}
