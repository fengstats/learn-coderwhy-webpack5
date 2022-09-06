const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const schemaConfig = require('../schema/loader01-schema.json')

module.exports = function (content, sourcemap, meta) {
  console.log('coderlazy loader 02')
  // 获取传入的参数
  // @ts-ignore
  const options = getOptions(this)

  // 参数校验
  // @ts-ignore
  validate(schemaConfig, options)

  console.log('options =>', options)
  return content
}

module.exports.pitch = () => {
  console.log('pitch loader 02')
}
