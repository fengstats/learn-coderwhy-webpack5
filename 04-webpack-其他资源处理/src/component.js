// 内联方式使用loader
// import 'style-loader!css-loader!./css/index.css'

import './css/index.css'
import './css/component.less'
import codeImg from './img/code.png'

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

// 返回图片元素节点
function imgComponent() {
  // 插入图片
  const element = document.createElement('div')

  const bgEle = new Image()
  const codeImg2 = require('./img/code.png')

  // console.log(codeImg)
  // console.log(codeImg2)

  // 版本问题: file-loader5.x 以后的版本需要 .default 才能拿到图片资源地址
  // bgEle.src = codeImg2.default
  bgEle.src = codeImg
  bgEle.style.width = '450px'

  // 插入一个小图标
  const iEle = document.createElement('i')
  iEle.className = 'iconfont icon-kafei f-icon1'

  element.appendChild(bgEle)
  element.appendChild(iEle)

  return element
}

console.log('component.js 文件执行')

document.body.appendChild(component())
document.body.appendChild(imgComponent())
