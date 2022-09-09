const { watch, src, dest } = require('gulp')

const jsTask = () => {
  return src('./src/*.js').pipe(dest('./dist'))
}

// 监听：只要 src 目录下文件更新，就重新执行 jsTask
watch('./src/*.js', jsTask)

module.exports = {
  jsTask,
}
