const { marked } = require('marked')
const hljs = require('highlight.js')

module.exports = function (content) {
  // 设置参数
  marked.setOptions({
    highlight: (code, lang) => {
      // @ts-ignore
      return hljs.highlight(lang, code).value
    },
  })

  const htmlContent = marked(content)

  // console.log(htmlContent)

  // 自己来做 html-loader 的事情
  const innerContent = '`' + htmlContent + '`'
  const moduleContent = `var lazyCode=${innerContent}; export default lazyCode;`

  // return htmlContent
  return moduleContent
}
