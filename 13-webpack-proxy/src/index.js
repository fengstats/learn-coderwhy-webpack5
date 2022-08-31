import { createApp } from 'vue'
import axios from 'axios'

import VueApp from './App.vue'

// Vue
const app = createApp(VueApp)
app.mount('#vue')

console.log('Hello Webpack')

// axios
if (0) {
  axios
    .get('https://httpbin.org/ip')
    .then((res) => {
      console.log('res', res)
    })
    .catch((err) => {
      console.log('error', err)
    })
}

axios
  .get('/chen/ip', { params: { name: 'code' } })
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.log('error', err)
  })
