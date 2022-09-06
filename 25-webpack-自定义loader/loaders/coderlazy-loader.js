module.exports = function (content, sourcemap, meta) {
  console.log('coderlazy loader =>', content)
  return content + 123
}
