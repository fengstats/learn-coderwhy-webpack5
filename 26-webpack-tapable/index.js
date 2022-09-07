const {
  SyncHook,
  SyncBailHook,
  SyncLoopHook,
  SyncWaterfallHook,
  AsyncSeriesHook,
  AsyncParallelHook,
} = require('tapable')

class LazyTapable {
  constructor() {
    // 自定义 hook
    this.hooks = {
      // 创建 hook 实例，并初始化参数设置
      // [这里设置了几个参数就可以在 tap 回调中拿到几个参数]
      // SyncHook：按照顺序执行所有 tap 注册的事件
      // SyncBailHook：有返回值的时候，停止执行
      // SyncLoopHook：返回值为 true 重复执行，当返回值为 undefined 的时候停止
      // SyncWaterfallHook：如果上一个事件的回调函数有值，那么会作为第一个参数传递到当前事件来
      // AsyncSeriesHook：在一个 hook 中监听多次事件，会通过串行的方式执行（一个一个事件执行，等一个执行完了才去执行下一个）
      // AsyncParallelHook：在一个 hook 中监听多次事件，会通过并行的方式执行（全部同时开始执行）
      // mineHook: new SyncHook(['name', 'age']),
      // mineHook: new SyncBailHook(['name', 'age']),
      // mineHook: new SyncLoopHook(['name', 'age']),
      // mineHook: new SyncWaterfallHook(['name', 'age']),
      // mineHook: new AsyncSeriesHook(['name', 'age']),
      mineHook: new AsyncParallelHook(['name', 'age']),
    }

    // Async
    // this.hooks.mineHook.tapAsync('event1', (name, age, callback) => {
    //   console.log('Async-event1 =>', name, age)
    //   setTimeout(() => {
    //     // 做完某些异步操作后就调用 callback
    //     callback()
    //   }, 1000)
    // })
    // this.hooks.mineHook.tapAsync('event2', (name, age, callback) => {
    //   console.log('Async-event2 =>', name, age)
    //   setTimeout(() => {
    //     // 做完某些异步操作后就调用 callback
    //     callback()
    //   }, 1000)
    // })

    // tapPromise
    this.hooks.mineHook.tapPromise('event1', (name, age) => {
      console.log('Async-event1 =>', name, age)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    })
    this.hooks.mineHook.tapPromise('event2', (name, age) => {
      console.log('Async-event2 =>', name, age)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    })

    // Sync：通过 hook.tap 注册事件
    // this.counter = 0
    // this.hooks.mineHook.tap('event1', (name, age, why) => {
    //   console.log('event1 =>', name, age, why)
    //   return 'event1-return-value'
    // })
    // this.hooks.mineHook.tap('event2', (name, age) => {
    //   console.log('event2 =>', name, age, this.counter)
    //   if (this.counter <= 10) {
    //     this.counter++
    //     return true
    //   }
    //   return undefined
    // })
  }

  // 通过 hook.call 触发事件
  emit() {
    // this.hooks.mineHook.call('小陈', 18)
    // this.hooks.mineHook.callAsync('小陈', 18, (eventName) => {
    //   console.log('all Async-event is finish')
    // })
    this.hooks.mineHook.promise('小黑', 20).then(() => {
      console.log('all Async-event is finish')
    })
  }
}

setTimeout(() => {
  console.log('\n100ms print content\n')
}, 100)

// 简单使用
const lazyTapable = new LazyTapable()
lazyTapable.emit()
