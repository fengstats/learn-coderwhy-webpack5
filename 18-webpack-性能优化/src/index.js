// 需要热更新
// if (module.hot) {
//   module.hot.accept()
// }

console.log('hello index page')

const app = document.querySelector('#app')
const btn = document.createElement('button')
btn.innerHTML = '加载 Element 内容'

btn.onclick = () => {
  import('./module/element.js').then((res) => {
    console.log('element', res)
    const { default: element } = res
    console.log(element)
    app.appendChild(element)
  })
}

app.appendChild(btn)
