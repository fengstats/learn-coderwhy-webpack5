// import _ from 'lodash'
// import dayjs from 'dayjs'

// console.log(_.join(['hello', 'main']))
// console.log('index', dayjs())

// 只要是异步引入的代码，webpack 都会进行代码分离
import(/* webpackChunkName: "bar" */ './bar.js').then((res) => {
  console.log(res)
})

import('./foo.js').then((res) => {
  console.log(res)
})

// import('./code_1.js').then((res) => {
//   console.log(res)
// })
