import color from 'css-color-function'
import rgbHex from 'rgb-hex'
import { elCSSVarMapMarking } from './constants'

/**
 * 根据主色生成色值表
 */
const generateColors = (primaryColor: string) => {
  const colors: {
    [key: string]: string
  } = {}
  Object.keys(elCSSVarMapMarking).forEach((key) => {
    const value = elCSSVarMapMarking[key].replace(/marking/g, primaryColor)
    colors[key] = '#' + rgbHex(color.convert(value))
  })
  return colors
}

/**
 * 生成色值表，修改 elCSSVar
 */
export const setElCSSVar = (primaryColor: string) => {
  const colors = generateColors(primaryColor)
  const style = document.documentElement.style
  Object.keys(colors).forEach((key) => {
    style.setProperty(key, colors[key])
  })
}
