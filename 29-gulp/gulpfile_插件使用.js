const { src, dest } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const terser = require('gulp-terser')

// 通过 babel 转换后输出
const buildTask = () => {
  return (
    src('./src/main.js')
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        }),
      )
      // .pipe(uglify())
      .pipe(terser({ mangle: { toplevel: true } }))
      .pipe(dest('./dist'))
  )
}

module.exports = {
  buildTask,
}
