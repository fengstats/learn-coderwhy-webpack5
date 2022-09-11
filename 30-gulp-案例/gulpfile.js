const { src, dest, series, parallel, watch } = require('gulp')
const htmlMin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const inject = require('gulp-inject')
// 注意：目前 del@7.0.0 的包是纯 ESM，不能混在 CommonJS 中使用
// 所以我们安装了较低版本的 del@4.1.1
const del = require('del')
const browserSync = require('browser-sync')

// 删除打包目录
const clean = (cb) => {
  const res = del.sync(['dist'])
  console.log('deleted:', res)
  cb()
}

const htmlTask = () => {
  // 记得将流返回出去，否则任务无法正常结束
  return src('./src/index.html')
    .pipe(
      htmlMin({
        // 折叠空白行
        collapseWhitespace: true,
      }),
    )
    .pipe(dest('./dist'))
}

const jsTask = () => {
  return src('./src/js/*.js', {
    // 以 src 目录基准匹配，生成文件时保留匹配目录结构
    base: './src',
  })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser({ mangle: { toplevel: true } }))
    .pipe(dest('./dist'))
}

const lessTask = () => {
  return (
    src('./src/css/*.less', { base: './src' })
      .pipe(less())
      // 使用 postcss 工具并添加预设
      .pipe(postcss([postcssPresetEnv()]))
      .pipe(dest('./dist'))
  )
}

// 将 js、less 等资源注入到 html 中
const injectHtmlTask = () => {
  return src('./dist/index.html')
    .pipe(
      inject(src(['./dist/css/*.css', './dist/js/*.js']), {
        // 注入时以相对路径的形式
        relative: true,
      }),
    )
    .pipe(dest('./dist'))
}

// 创建一个服务
const bs = browserSync.create()
// 开启一个本地服务
const server = () => {
  // 通过 watch 来监听文件变化执行打包操作
  watch('./src/index.html', series(htmlTask, injectHtmlTask))
  watch('./src/js/*.js', series(jsTask, injectHtmlTask))
  watch('./src/css/*.less', series(lessTask, injectHtmlTask))

  bs.init({
    port: 8080,
    // 自动打开浏览器
    open: true,
    // 哪些文件变化时需要刷新浏览器
    files: './dist/*',
    server: {
      // 服务根目录jjjkkk
      baseDir: './dist',
    },
  })
}

// 打包
// html/js/css 的打包工作可以并行执行
const build = series(clean, parallel(htmlTask, jsTask, lessTask), injectHtmlTask)
// 开发
const serve = series(build, server)

module.exports = { clean, htmlTask, jsTask, lessTask, injectHtmlTask, server, build, serve }
