import module1 from './module/chen_1.js'

// 需要热更新
if (module.hot) {
  module.hot.accept()
}

console.log('hello index page')
