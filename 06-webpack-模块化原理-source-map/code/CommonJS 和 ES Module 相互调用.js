var __webpack_modules__ = {
  './src/utils/format.js': function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict'
    __webpack_require__.r(__webpack_exports__)
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
  },

  './src/utils/math.js': function (module) {
    // 通过 CommonJs 方式进行导出

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
var __webpack_module_cache__ = {}

// 缓存函数
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId]
  if (cachedModule !== undefined) {
    return cachedModule.exports
  }
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {}
  })

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__)

  return module.exports
}

// n 函数,判断是否是 ES Module 模块化,自动添加 default 属性
!(function () {
  __webpack_require__.n = function (module) {
    var getter =
      module && module.__esModule
        ? function () {
            return module['default']
          }
        : function () {
            return module
          }
    // todo: 这个 a 没看懂,主要也没有使用到
    __webpack_require__.d(getter, { a: getter })
    return getter
  }
})()

// 给 __webpack_require__ 添加 d 函数,内部其实是给 exports 添加导出的属性,并重写其 get 方法
!(function () {
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
      }
    }
  }
})()

// o 函数,判断传入的属性(prop)是否属于此对象(obj)
!(function () {
  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }
})()

// r 函数,标记 __esModule = true
!(function () {
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
    }
    Object.defineProperty(exports, '__esModule', { value: true })
  }
})()

var __webpack_exports__ = {}
!(function () {
  __webpack_require__.r(__webpack_exports__)
  // 使用 ES Module 的方式导入 CommonJS 导出的内容
  var _utils_math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/utils/math.js')
  var _utils_math_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
    _utils_math_js__WEBPACK_IMPORTED_MODULE_0__
  )

  // 使用 CommonJS 的方式导入 ES Module 导出的内容
  const { formatDate } = __webpack_require__(/*! ./utils/format */ './src/utils/format.js')
  console.log(formatDate(1))
  console.log((0, _utils_math_js__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 100))
})()
