var __webpack_modules__ = {
  './src/utils/format.js': function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    __webpack_require__.r(__webpack_exports__)

    // 相当于给 exports 做了一层代理J
    __webpack_require__.d(__webpack_exports__, {
      formatDate: function () {
        return formatDate
      },
      formatPrice: function () {
        return formatPrice
      }
    })
    // 通过 ES Module 方式进行导出
    function formatDate(date) {
      return '2022-08-26 18:45'
    }
    const formatPrice = (price) => {
      return '100.00'
    }
  }
}

// 缓存对象
var __webpack_module_cache__ = {}

// 缓存操作(CommonJs原理中注解过了)
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = (__webpack_module_cache__[moduleId] = { exports: {} })

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

  return module.exports
}

!(function () {
  // 给 __webpack_require__ 这个函数对象添加了一个属性d(function)
  __webpack_require__.d = function (exports, definition) {
    // 遍历传入的definition对象
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        // 如果此属性不存在 exports 上的话,手动定义一个属性,并且重写其get方法 export['example'] 或者 export.example 调用的时候触发
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
      }
    }
  }
})()

!(function () {
  // 给 __webpack_require__ 这个函数对象添加了一个属性o(function)
  __webpack_require__.o = function (obj, prop) {
    // 判断传入的属性(prop)是否属于此对象(obj)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }
})()

!(function () {
  // 给 __webpack_require__ 这个函数对象添加了一个属性r(function)
  __webpack_require__.r = function (exports) {
    // 给 exports 对象添加了 Symbol.toStringTag = 'Module'
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    // 给 exports 对象添加了 __esModule = true,标记这是使用 esModule 进行模块化的
    Object.defineProperty(exports, '__esModule', { value: true })
  }
})()

// 模块加载执行
var __webpack_exports__ = {}
!(function () {
  // 调用r的目的是标记一个属性 __esModule = true
  __webpack_require__.r(__webpack_exports__)

  var _utils_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/utils/format.js')

  // (0, 函数)() == 函数()

  console.log((0, _utils_format__WEBPACK_IMPORTED_MODULE_0__.formatDate)(1))
  console.log((0, _utils_format__WEBPACK_IMPORTED_MODULE_0__.formatPrice)(100))
})()
