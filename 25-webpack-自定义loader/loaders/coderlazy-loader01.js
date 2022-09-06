module.exports = function (content, sourcemap, meta) {
  console.log('coderlazy loader 01')
  return content
}

// PitchLoader
module.exports.pitch = () => {
  console.log('pitch loader 01')
}
