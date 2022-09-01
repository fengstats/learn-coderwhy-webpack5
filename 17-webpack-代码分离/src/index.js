import _ from 'lodash'
import dayjs from 'dayjs'

import code from './code_1.js'

console.log(_.join(['hello', 'index']))
console.log('main', dayjs())

// import 函数异步加载模块，通过 splitChunks.chunks 属性来设置是否处理
import('lodash').then((res) => {
  console.log('lodash')
})
