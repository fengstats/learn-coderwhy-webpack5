const babel = require('@babel/core')
const { getOptions } = require('loader-utils')

module.exports = function (content) {
  // @ts-ignore
  const callback = this.async()
  // @ts-ignore
  const options = getOptions(this)

  // 对源代码进行转换
  babel.transform(content, options, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.code)
    }
  })
  // return content
}
