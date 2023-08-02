<template>
  <el-dropdown trigger="click" class="langDropdown" @command="handleSetLang">
    <div class="content">
      <el-tooltip :content="$t('navbar.lang')" effect="light">
        <SvgIcon icon="language" class="svgIcon" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="app.localeLang === zhCn" :command="zhCn">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="app.localeLang === en" :command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ElMessage } from 'element-plus'
  import SvgIcon from '@/components/SvgIcon/index.vue'
  import { useAppStore } from '@/store'
  import i18n, { zhCn, en } from '@/i18n'

  const emit = defineEmits(['langChange'])

  const route = useRoute()
  const app = useAppStore()

  const handleSetLang = (lang: string) => {
    app.setlLcaleLang(lang)
    i18n.global.locale.value = lang
    document.title = i18n.global.t(`route.${route.meta.title}`)
    emit('langChange', lang)
    ElMessage({
      type: 'success',
      message: i18n.global.t('toast.switchLangSuccess')
    })
  }
</script>

<style lang="scss" scoped>
  .langDropdown {
    cursor: pointer;

    .content {
      border-radius: 5px;
      background-color: #fff;

      .svgIcon {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
