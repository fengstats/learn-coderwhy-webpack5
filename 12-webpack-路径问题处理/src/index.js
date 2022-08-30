// import React from 'react'
// import ReactDOM from 'react-dom'
import { createApp } from 'vue'

// import ReactApp from './App.jsx'
import VueApp from './App.vue'

// React
// ReactDOM.render(<ReactApp />, document.querySelector('#app'))

// Vue
const app = createApp(VueApp)
app.mount('#vue')

console.log('Hello Webpack')
