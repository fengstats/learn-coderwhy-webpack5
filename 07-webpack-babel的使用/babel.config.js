module.exports = {
  presets: [
    // 给 preset-env 增加参数时还需要补充一个数组，否则报错
    [
      '@babel/preset-env',
      {
        // false：不使用 polyfill
        // usage：根据源代码中需要哪些 polyfill，则引入，否则不引入
        // entry：只要是浏览器所需要的 polyfill 都引入，默认不生效，需要在入口文件引入 core-js/stable 以及 regenerator-runtime/runtime
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}
