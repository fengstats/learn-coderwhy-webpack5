// 需要热更新
// if (module.hot) {
//   module.hot.accept()
// }

console.log('hello index page')

const app = document.querySelector('#app')
const btn = document.createElement('button')
btn.innerHTML = '加载 Element 内容'

btn.onclick = () => {
  import(
    /* webpackChunkName: 'element' */
    // 文件预加载：低优先级，在浏览器空闲时下载文件，等待加载时直接使用 prefetch cache 加载文件（提升用户体验）
    /* webpackPrefetch: true */
    // 相对比 prefetch 来说，具有中等优先级，会在父 chunk 加载时，以并行的方式下载
    /* webpackPreload: true */
    './module/element.js'
  ).then((res) => {
    console.log('element', res)
    const { default: element } = res
    console.log(element)
    app.appendChild(element)
  })
}

app.appendChild(btn)
