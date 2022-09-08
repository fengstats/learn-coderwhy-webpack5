const path = require('path')
const AutoUploadPlugin = require('./plugins/AutoUploadPlugin.js')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new AutoUploadPlugin()],
}
