// import _ from 'lodash'
// import dayjs from 'dayjs'

// console.log(_.join(['hello', 'main']))
// console.log('index', dayjs())

if (module.hot) {
  module.hot.accept()
}

console.log('hello main page')

// 只要是异步引入的代码，webpack 都会进行代码分离
import(/* webpackChunkName: "bar" */ './bar.js').then((res) => {
  console.log(res)
})

import('./foo.js').then((res) => {
  console.log(res)
})
