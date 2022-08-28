// import { formatDate } from './utils/format.js'
// const { sum } = require('./utils/math')

// 使用 CommonJS 的方式导入 ES Module 导出的内容
const { formatDate } = require('./utils/format')
// 使用 ES Module 的方式导入 CommonJS 导出的内容
import { sum } from './utils/math.js'

// 通过测试我们发现 ES Module 与 CommonJS 是可以相互调用的,为什么？

// 测试报错信息
// console.log(abc)

console.log(formatDate(1))
console.log(sum(1, 100))
