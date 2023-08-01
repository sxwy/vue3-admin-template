import color from 'css-color-function'
import rgbHex from 'rgb-hex'
import elementPlusCSS from 'element-plus/dist/index.css?inline'
import { markingMapColor, colorMapMarking } from './constants'

/**
 * 根据主色生成色值表
 */
const generateColors = (primary: string) => {
  const colors: {
    [key: string]: string
  } = {}
  Object.keys(markingMapColor).forEach((key) => {
    const value = markingMapColor[key].replace(/marking/g, primary)
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

/**
 * 把 elCSS 中的默认样式颜色通过正则替换成标记
 */
const markingElCSS = () => {
  let css = elementPlusCSS
  Object.keys(colorMapMarking).forEach((key) => {
    const value = colorMapMarking[key]
    css = css.replace(new RegExp(key, 'ig'), value)
  })
  return css
}

/**
 * 把标识的 CSS 替换为主色值
 */
const replaceMarking = (
  colors: {
    [key: string]: string
  },
  cssText: string
) => {
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp('(:|\\s+)' + key, 'g'),
      '$1' + colors[key]
    )
  })
  return cssText
}

/**
 * 写入新样式到 style
 */
export const writeNewStyle = (elNewStyle: string) => {
  const attrKey = 'data-id'
  const attrVal = 'customTheme'
  const head = document.head
  const styles = head.getElementsByTagName('style')
  const styleList = Array.from(styles)
  styleList.forEach((item) => {
    if (item.getAttribute(attrKey) === attrVal) {
      head.removeChild(item)
    }
  })
  const styleTag = document.createElement('style')
  styleTag.setAttribute(attrKey, attrVal)
  styleTag.innerText = elNewStyle
  document.head.appendChild(styleTag)
}

/**
 * 根据主色值，生成最新的样式表
 */
export const generateNewStyle = (primaryColor: string) => {
  // 1、生成色值表
  const colors = generateColors(primaryColor)
  // 2、标记 elCSS 默认的色值
  const cssText = markingElCSS()
  // 3、把标记的色值替换成色值表中的颜色
  return replaceMarking(colors, cssText)
}
