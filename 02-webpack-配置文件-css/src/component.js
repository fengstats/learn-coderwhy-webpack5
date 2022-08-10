// 内联方式使用loader
// import 'style-loader!css-loader!./css/index.css'

import './css/index.css'
import './css/component.less'

// 返回一个div元素节点
function component() {
  // 创建元素片段
  const element = document.createElement('div')

  // 插入内容
  element.innerHTML = ['hello', 'webpack'].join(' ')

  // 添加类名
  element.className = 'content'

  return element
}

console.log('component.js 文件执行')

document.body.appendChild(component())
