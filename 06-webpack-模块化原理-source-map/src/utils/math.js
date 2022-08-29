// 通过 CommonJs 方式进行导出

const test = () => {
  return '测试函数'
}

function sum(n1, n2) {
  return n1 + n2
}

module.exports = {
  sum,
  test
}
