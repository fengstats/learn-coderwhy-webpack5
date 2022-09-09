const { watch } = require('gulp')

const printHello = () => {
  console.log('hello gulp watch')
}

watch('./gulpfile_任务监听.js', printHello)

module.exports = {
  printHello,
}
