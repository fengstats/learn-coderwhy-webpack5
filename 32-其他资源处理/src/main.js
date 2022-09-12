import { createApp } from 'vue'

import './css/style.css'
import App from './vue/App.vue'

const app = createApp(App)
app.mount('#app')

const sum = (n1, n2) => {
  return n1 + n2
}
console.log(sum)

export { sum }
