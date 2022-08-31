import React from 'react'
import ReactDOM from 'react-dom'
import { createApp } from 'vue'

import './math'
import ReactApp from './App.jsx'
import VueApp from './App.vue'

console.log('Hello Webpack')

if (module.hot) {
  module.hot.accept('./math.js', () => {
    console.log(module)
    console.log('math 模块发生了热更新')
  })
}

// React
ReactDOM.render(<ReactApp />, document.querySelector('#app'))

// Vue
const app = createApp(VueApp)

app.mount('#vue')
