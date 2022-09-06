// NormalLoader
// module.exports = function (content, sourcemap, meta) {
//   console.log('coderlazy loader 01')
//   // 1. 同步 loader 直接返回
//   // return content
//   this.callback(null, content)
// }

// 2. 异步 loader
module.exports = function (content) {
  console.log('async coderlazy loader 01')

  // @ts-ignore
  const callback = this.async()

  // 但是其实 loader-runner 在执行的时候还是会等你这个 loader 加载完成才去加载下一个，并不会跳过
  setTimeout(() => {
    callback(null, content)
  }, 2000)
}

// PitchingLoader
module.exports.pitch = () => {
  console.log('pitch loader 01')
}
