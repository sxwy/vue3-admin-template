import { createI18n } from 'vue-i18n'
import { STORE_CACHE_KEY } from '@/constants'
import { getLocalStorage } from '@/utils'
import * as lang from './lang'

/** 中文语言变量 */
export const zhCn = 'zh-cn'

/** 英文语言变量 */
export const en = 'en'

/** 获取本地语言，因为 pinia 在挂载之前获取不到对应的 state，这边使用缓存方式获取 */
const getLocale = () => {
  const key = `${STORE_CACHE_KEY}_app`
  const val = getLocalStorage(key)
  return val?.localeLang || zhCn
}

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  messages: {
    [zhCn]: lang.zhCn,
    [en]: lang.en
  }
})

export default i18n
