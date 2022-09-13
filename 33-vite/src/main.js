import { createApp } from 'vue'

import { sum } from './utils/math'
import { formatData } from './utils/format'
import { createImgDom } from './utils/component'
// @ts-ignore
import App from './vue/App.vue'

import './css/main.css'
import './css/other.less'

document.body.appendChild(createImgDom())

const app = createApp(App)
app.mount('#app')

console.log(sum(1, 3))
console.log(formatData('110'))
