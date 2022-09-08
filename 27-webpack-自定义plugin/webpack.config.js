const path = require('path')
const AutoUploadPlugin = require('./plugins/AutoUploadPlugin.js')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new AutoUploadPlugin({
      host: '121.4.83.62',
      username: 'root',
      password: '',
      serverPath: '/home/feng/example-server',
      // serverPath: '/',
    }),
  ],
}
