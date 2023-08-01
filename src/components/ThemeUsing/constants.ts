/** 默认色值 */
export const defaultColor = '#409eff'

/** 标识和颜色的映射表，用于生成主色及衍生色值 */
export const markingMapColor: {
  [key: string]: string
} = {
  primary: 'color(marking)',
  'shade-1': 'color(marking shade(10%))',
  'light-1': 'color(marking tint(10%))',
  'light-2': 'color(marking tint(20%))',
  'light-3': 'color(marking tint(30%))',
  'light-4': 'color(marking tint(40%))',
  'light-5': 'color(marking tint(50%))',
  'light-6': 'color(marking tint(60%))',
  'light-7': 'color(marking tint(70%))',
  'light-8': 'color(marking tint(80%))',
  'light-9': 'color(marking tint(90%))',
  subMenuHover: 'color(marking tint(70%))',
  subMenuBg: 'color(marking tint(80%))',
  menuHover: 'color(marking tint(90%))',
  menuBg: 'color(marking)'
}

/** 颜色和标识的映射表，用于匹配替换 elCSS 中的色值 */
export const colorMapMarking: {
  [key: string]: string
} = {
  '#409eff': 'primary',
  '#3a8ee6': 'shade-1', // 在 elCSS 中没找到，是否需要存在？
  '#53a8ff': 'light-1', // 在 elCSS 中没找到，是否需要存在？
  '#66b1ff': 'light-2', // 在 elCSS 中没找到，是否需要存在？
  '#79bbff': 'light-3',
  '#8cc5ff': 'light-4', // 在 elCSS 中没找到，是否需要存在？
  '#a0cfff': 'light-5',
  '#b3d8ff': 'light-6', // 在 elCSS 中没找到，是否需要存在？
  '#c6e2ff': 'light-7',
  '#d9ecff': 'light-8',
  '#ecf5ff': 'light-9'
}

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
