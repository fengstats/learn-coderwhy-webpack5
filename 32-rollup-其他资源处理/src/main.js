import { createApp } from 'vue'

import './css/style.css'
// @ts-ignore
import App from './vue/App.vue'

const app = createApp(App)
app.mount('#app')

const sum = (n1, n2) => {
  return n1 + n2
}
console.log(sum(1, 3))

export { sum }
