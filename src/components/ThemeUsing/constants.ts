/** elCSSVar 和生成颜色的映射表 */
export const elCSSVarMapMarking: {
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

/** 默认色值 */
export const defaultColor = '#409eff'

/** 颜色选择器中的预设值 */
export const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]
