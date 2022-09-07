// @ts-ignore
import mdContent from './docs.md'
import 'highlight.js/styles/default.css'

const sayHi = (name = 'chen') => {
  console.log(`${name} hi！`)
}

sayHi('小爱同学')

document.body.innerHTML = mdContent
