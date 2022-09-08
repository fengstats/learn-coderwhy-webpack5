class AutoUploadPlugin {
  constructor() {}

  // webpack 会调用这个函数，并且把 compiler 作为参数传递过来
  apply(compiler) {
    // 因为我们要做的是自动把打包后的目录文件上传至服务器，所以需要在 afterEmit Hook 之后做处理
    compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin', (compilation, callback) => {
      console.log('打包内容已经上传至服务器啦～')
      callback()
    })
  }
}

module.exports = AutoUploadPlugin
