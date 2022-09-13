// @ts-ignore
import exampleImg from '../img/1.png'

export function createImgDom() {
  const imgDom = document.createElement('img')
  imgDom.src = exampleImg
  imgDom.width = 400
  return imgDom
}
