const { src, dest } = require('gulp')
const htmlMin = require('gulp-htmlmin')

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

module.exports = { htmlTask }
