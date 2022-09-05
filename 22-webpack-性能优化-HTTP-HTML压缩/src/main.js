import { sum } from './math'
// 引入但是不使用，看看 Tree Shaking 会不会在打包时移除这段代码
import './format'
// 测试 css tree shaking 效果的
// - 发现代码可以不用引入，因为是检测指定目录文件的，我们写的规则是 src 下所有目录文件
// - 也就是说只要你 js 代码中存在如 classname = 'xxx' 这种关键字那么对应的类选择器样式就不会移除
// - 又试了一下，发现将代码注释后同样生效，除非删除文件或者移出 src 目录
import createTitleCpn from './components.js'

import './index.css'

document.body.appendChild(createTitleCpn())

console.log(sum(1, 2))
