import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import nodeResolve from '@rollup/plugin-node-resolve'
// import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import replace from 'rollup-plugin-replace'

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
    // 注入环境变量：解决 vue 源码中使用了 process.env.NODE_ENV undefined 的问题
    replace({
      // 使用 JSON.stringify 是因为如果不用那么会被当成一个变量去寻找，我们包裹一层
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // node_modules/ 内包源码的注入
    nodeResolve(),
    // postcss(),
    // 将所有 css 单独提取到一个文件中
    css({ output: 'bundle.css' }),
    vue(),
    terser(),
  ],
}
