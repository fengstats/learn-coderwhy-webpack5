export default {
  // 入口
  input: './src/main.js',
  // 出口
  // output: {
  //   // 模块化格式
  //   format: 'umd',
  //   name: 'lazyUtils',
  //   file: 'dist/lazy.umd.js',
  // },
  output: [
    {
      format: 'umd',
      name: 'lazyUtils',
      file: 'dist/lazy.umd.js',
    },
    {
      format: 'cjs',
      file: 'dist/lazy.commonjs.js',
    },
    {
      format: 'amd',
      file: 'dist/lazy.amd.js',
    },
    {
      format: 'es',
      file: 'dist/lazy.es.js',
    },
  ],
}
