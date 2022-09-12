import { dateFormat } from './utils/format'
import _ from 'lodash'

const itemObj = { name: 'chen', age: 18 }

itemObj.name = 'z-boss'
itemObj.age = 20
itemObj.sex = 'man'

console.log(itemObj)
console.log(dateFormat())
console.log(_.join(['hello', 'lodash']))

export { itemObj }
