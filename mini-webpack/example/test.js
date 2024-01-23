// 异步加法
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b)
  }, Math.random() * 1000)
}

async function total() {
  const res1 = await sum(4, 1, 2, 3)
  const res2 = await sum(1, 2, 3)
  return [res1, res2]
}

total()

// 实现下 sum 函数，注意不能使用加法，在 sum 中借助 asyncAdd 完成加法，尽可能的优化这个方法的时间
async function sum(...args) {
  let index = 0
  let count = 0
  let sumValue = 0
  while (index < args.length) {
    if (sumValue === 0) {
      sumValue = args[index++]
    }
    count = args[index++]
    await new Promise((resolve) => {
      asyncAdd(sumValue, count, (voidValue, res) => {
        sumValue = res
        // @ts-ignore
        resolve()
      })
    })
  }
  return sumValue
}

console.log('name')
console.log('test')
