import { sum } from './math'
// 引入但是不使用，看看 Tree Shaking 会不会在打包时移除这段代码
import './format'

import './index.css'

console.log(sum(1, 2))
