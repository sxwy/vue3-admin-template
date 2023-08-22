import color from 'css-color-function'
import rgbHex from 'rgb-hex'

/** elCSSVar 和生成颜色的映射表 */
const elCSSVarMapMarking: {
  [key: string]: string
} = {
  '--el-color-primary': 'color(marking)',
  '--el-color-primary-light-3': 'color(marking tint(30%))',
  '--el-color-primary-light-5': 'color(marking tint(50%))',
  '--el-color-primary-light-7': 'color(marking tint(70%))',
  '--el-color-primary-light-8': 'color(marking tint(80%))',
  '--el-color-primary-light-9': 'color(marking tint(90%))',
  '--el-color-primary-dark-2': 'color(marking shade(20%))'
}

/**
 * 根据主色生成色值表
 * @param primaryColor 当前选择的颜色
 * @returns 返回色值表
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
 * @param primaryColor 当前选择的颜色
 */
export const setElCSSVar = (primaryColor: string) => {
  const colors = generateColors(primaryColor)
  const style = document.documentElement.style
  Object.keys(colors).forEach((key) => {
    style.setProperty(key, colors[key])
  })
}
