module.exports = {
  presets: [
    // 给 preset-env 增加参数时还需要补充一个数组，否则报错
    [
      '@babel/preset-env',
      {
        // false：不使用 polyfill
        // usage：根据源代码中需要哪些 polyfill，则引入，否则不引入
        // entry：只要是浏览器所需要的 polyfill 都引入，默认不生效，需要在入口文件引入 core-js/stable 以及 regenerator-runtime/runtime
        // TIP: 和 @baebel/plugin-transform-runtime 选其一，在 plugins 中配置
        // useBuiltIns: 'usage',
        // 默认不写为 2 版本，如果使用其他版本需要手动指定
        // corejs: 3
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ]
  ]
}
