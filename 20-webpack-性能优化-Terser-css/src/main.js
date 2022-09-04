import './index.css'

function sum(n1, n2) {
  return arguments[0] + arguments[1]
}

const obj = {
  say() {
    return 'hello'
  },
}

console.log(obj.say())
console.log(sum(1, 2))
