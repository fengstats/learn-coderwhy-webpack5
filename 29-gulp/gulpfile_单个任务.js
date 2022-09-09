const gulp = require('gulp')

// 4.0 版本之前定义任务的写法
gulp.task('sayHello', (cb) => {
  console.log('hello gulp')
  // 通过 callback 回调函数告知 gulp 任务结束
  cb()
})

// 4.0 之后定义任务
const sayHi = (cb) => {
  console.log('hi gulp')
  cb()
}
module.exports = { sayHi }

module.exports.default = (cb) => {
  console.log('default task')
  cb()
}
