// ES6 module 方式导入
import { sum } from './utils/math.js'

// Common.js 方式导入
const { formatTime } = require('./utils/datetime.js')

console.log(sum(1, 22))
console.log(formatTime(1))
