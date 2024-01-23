import fs from 'fs'

// this is comments
function createAsset(num) {
  const source = fs.readFileSync('./copyblob', { encoding: 'utf-8' })
  console.log(source)
}

function createGraph() {}

createAsset(1)
