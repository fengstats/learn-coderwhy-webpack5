const { src, dest } = require('gulp')

// 从 src 目录读取文件 main.js，输出至 dist 目录中
const copyFileTask = () => {
  return src('./src/main.js').pipe(dest('./dist'))
}

module.exports = {
  copyFileTask,
}
