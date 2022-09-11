const { src, dest } = require('gulp')
const htmlMin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const postcssPresetEnv = require('postcss-preset-env')

const lessTask = () => {
  return (
    src('./src/css/*.less', { base: './src' })
      .pipe(less())
      // 使用 postcss 工具并添加预设
      .pipe(postcss([postcssPresetEnv()]))
      .pipe(dest('./dist'))
  )
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

module.exports = { htmlTask, jsTask, lessTask }
