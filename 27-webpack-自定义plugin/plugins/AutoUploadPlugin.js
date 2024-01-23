const { NodeSSH } = require('node-ssh')

class AutoUploadPlugin {
  constructor(options) {
    this.ssh = new NodeSSH()
    this.options = options
  }
  // webpack 会调用这个函数，并且把 compiler 作为参数传递过来
  apply(compiler) {
    // 因为我们要做的是自动把打包后的目录文件上传至服务器，所以需要在 afterEmit Hook 之后做处理
    compiler.hooks.afterEmit.tapAsync('AutoUploadPlugin', async (compilation, callback) => {
      // 1. 获取打包目录和服务器上传目录
      const outputPath = compilation.outputOptions.path
      const serverPath = this.options.serverPath
      // todo：做个简单的先判断只要不是根目录就能删，后面在完善
      if (serverPath === '/') {
        console.log('检验为根目录：取消文件上传')
        return callback()
      }
      // 2. 连接服务器
      await this.connectServer()
      // 3. 清空服务器原来目录的内容（需要注意！！！需要添加一些验证，不然如果用户传了根目录，你给人删了那不就 g 了）
      console.log('检验不是根目录：准备清空', serverPath, '目录下所有文件')
      await this.ssh.execCommand(`rm -rf ${serverPath}/*`)
      // 4. 上传文件到服务器（ssh连接）
      await this.uploadFiles(outputPath, serverPath)
      // 5. 退出（关闭 ssh 连接）
      await this.ssh.dispose()
      callback()
    })
  }
  async connectServer() {
    const { host, username, password } = this.options
    // 用户名
    console.log('服务器连接中，请稍后...')
    await this.ssh.connect({
      host,
      username,
      password,
    })
    console.log('服务器连接成功')
  }
  async uploadFiles(localPath, remotePath) {
    console.log('正在上传打包目录所有文件至', remotePath, '请稍后')
    const status = await this.ssh.putDirectory(localPath, remotePath, {
      // 是否递归上传目录所有文件
      recursive: true,
      // 并发数
      concurrency: 10,
    })
    console.log(`文件上传状态：${status ? '成功' : '失败'}`)
  }
}

module.exports = AutoUploadPlugin
