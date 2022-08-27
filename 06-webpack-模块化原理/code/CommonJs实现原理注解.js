// 定义了一个对象
// 模块的路径作为key,使用一个函数作为value
var __webpack_modules__ = {
  './src/utils/math.js': function (module) {
    const test = () => {
      return '测试函数'
    }
    function sum(n1, n2) {
      return n1 + n2
    }
    module.exports = {
      sum,
      test
    }
  }
}

// 此对象用于加载模块的缓存
var __webpack_module_cache__ = {}

// 这个函数,当我们加载某个模块时,都会调用此函数
function __webpack_require__(moduleId) {
  // 判断缓存中是否已经加载过此模块,若加载过,直接返回缓存中的exports
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }

  // 对象的连续赋值操作
  var module = (__webpack_module_cache__[moduleId] = { exports: {} })

  // 加载执行模块
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

  // 导出
  return module.exports
}

var __webpack_exports__ = {}

// 这种写法其实就是一个立即执行函数,利用'!'号变成表达式,避免语法报错
!(function () {
  const { sum, test } = __webpack_require__('./src/utils/math.js')

  console.log(sum(1, 11))
  console.log(test())
})()
