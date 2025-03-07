<template>
  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { RouterView } from 'vue-router'
  import { useAppStore } from '@/store'
  import { setElCSSVar } from '@/utils'
  import { zhCn } from '@/i18n'
  import zhCnLang from 'element-plus/es/locale/lang/zh-cn'
  import enLang from 'element-plus/es/locale/lang/en'

  const app = useAppStore()

  const locale = computed(() => (app.localeLang === zhCn ? zhCnLang : enLang))

  setElCSSVar(app.themePrimaryColor)
</script>

<style lang="scss"></style>
