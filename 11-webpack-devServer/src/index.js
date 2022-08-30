import './math'

console.log('Hello Webpack')

module.hot &&
  module.hot.accept('./math.js', () => {
    console.log(module)
    console.log('math 模块发生了热更新')
  })
