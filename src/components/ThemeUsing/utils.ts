import color from 'css-color-function'
import rgbHex from 'rgb-hex'
import elementPlusCss from 'element-plus/dist/index.css?inline'
import { markingMapColor, colorMapMarking } from './constants'

/**
 * 写入新样式到 style
 * @param {*} elNewStyle  element-plus 的新样式
 */
export const writeNewStyle = (elNewStyle: string) => {
  const style = document.createElement('style')
  style.innerText = elNewStyle
  document.head.appendChild(style)
}

/**
 * 根据主色值，生成最新的样式表
 */
export const generateNewStyle = (primaryColor: string) => {
  const colors = generateColors(primaryColor)
  let cssText = markingElCSS(elementPlusCss)

  // 遍历生成的样式表，在 CSS 的原样式中进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })

  return cssText
}

/**
 * 根据主色生成色值表
 */
export const generateColors = (primary: string) => {
  const colors: {
    [key: string]: string
  } = {
    primary
  }
  Object.keys(markingMapColor).forEach((key) => {
    const value = markingMapColor[key].replace(/marking/g, primary)
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

/**
 * 把 elCss 中的默认样式通过正则替换成标记
 */
const markingElCSS = (data: string) => {
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMapMarking).forEach((key) => {
    const value = colorMapMarking[key]
    data = data.replace(new RegExp(key, 'ig'), value)
  })
  return data
}
