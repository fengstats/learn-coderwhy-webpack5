module.exports = function (content, sourcemap, meta) {
  console.log('coderlazy loader 02')
  return content
}

module.exports.pitch = () => {
  console.log('pitch loader 02')
}
