import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

export default {
  // 入口
  input: './src/main.js',
  // 出口
  output: {
    format: 'umd',
    name: 'lazyUtils',
    file: 'dist/bundle.js',
  },
  plugins: [
    babel({
      // 辅助函数相关
      babelHelpers: 'bundled',
    }),
    terser(),
    // node_modules/ 内包源码的注入
    nodeResolve(),
    postcss(),
  ],
}
