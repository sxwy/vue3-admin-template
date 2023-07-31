<template>
  <el-dropdown trigger="click" class="langDropdown" @command="handleSetLang">
    <div class="content">
      <SvgIcon icon="language" class="svgIcon" />
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
  import { useI18n } from 'vue-i18n'
  import { ElMessage } from 'element-plus'
  import SvgIcon from '@/components/SvgIcon/index.vue'
  import { useAppStore } from '@/store'
  import { zhCn, en } from '@/i18n'

  const emit = defineEmits(['langChange'])

  const i18n = useI18n()
  const app = useAppStore()

  const handleSetLang = (lang: string) => {
    app.setlLcaleLang(lang)
    i18n.locale.value = lang
    emit('langChange', lang)
    ElMessage({
      type: 'success',
      message: i18n.t('toast.switchLangSuccess')
    })
  }
</script>

<style lang="scss" scoped>
  .langDropdown {
    cursor: pointer;

    .content {
      padding: 5px;
      border-radius: 5px;
      background-color: #fff;

      .svgIcon {
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
