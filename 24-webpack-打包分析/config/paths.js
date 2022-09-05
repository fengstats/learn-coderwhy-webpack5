const path = require('path')

// cwd：猜测是 current work directory 当前工作目录，也就是根目录（package.json所在目录）
const workDir = process.cwd()

// 传入一个相对路径的，自动相对于当前工作目录生成一个绝对路径
const createWorkDir = (relativePath) => {
  return path.resolve(workDir, relativePath)
}

module.exports = {
  createWorkDir,
}
