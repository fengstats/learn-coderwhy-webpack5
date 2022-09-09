const { series, parallel } = require('gulp')

const task1 = (cb) => {
  setTimeout(() => {
    console.log('task1')
    cb()
  }, 1000)
}

const task2 = (cb) => {
  setTimeout(() => {
    console.log('task2')
    cb()
  }, 1000)
}

const task3 = (cb) => {
  setTimeout(() => {
    console.log('task3')
    cb()
  }, 1000)
}

// 串行任务
const seriesTask = series(task1, task2, task3)

// 并行任务
const parallelTask = parallel(task1, task2, task3)

// 组合任务
const composeTask = series(seriesTask, parallelTask)

module.exports = {
  task1,
  task2,
  task3,
  seriesTask,
  parallelTask,
  composeTask,
}
