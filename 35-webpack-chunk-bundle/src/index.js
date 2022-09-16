import Add from './add.js'
import Mul from './mul.js'
import { once } from 'lodash'

const onceAdd = once(Add)
const resultAdd = Add(1, 10)
const resultMul = Mul(1, 10)

console.log(resultAdd)
console.log(resultMul)
