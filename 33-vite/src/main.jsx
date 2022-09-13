import { createApp } from 'vue'
import React from 'react'
import ReactDom from 'react-dom'

import { sum } from './utils/math'
import { formatData } from './utils/format'
import { createImgDom } from './utils/component'
// @ts-ignore
import App from './vue/App.vue'
import ReactApp from './react/App.jsx'

import './css/main.css'
import './css/other.less'

// img
document.body.appendChild(createImgDom())

// vue
const app = createApp(App)
app.mount('#app')

// react
// @ts-ignore
ReactDom.render(<ReactApp />, document.querySelector('#react-app'))

console.log(sum(1, 3))
console.log(formatData('110'))
