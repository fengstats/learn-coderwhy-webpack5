import React from 'react'
import ReactDOM from 'react-dom'

import './math'
import ReactApp from './App.jsx'

console.log('Hello Webpack')

if (module.hot) {
  module.hot.accept('./math.js', () => {
    console.log(module)
    console.log('math 模块发生了热更新')
  })
}

// React
ReactDOM.render(<ReactApp />, document.querySelector('#app'))
