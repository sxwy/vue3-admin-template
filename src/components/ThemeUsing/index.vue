<template>
  <div class="themeUsing">
    <el-tooltip :content="$t('navbar.themeUsing')" effect="light">
      <SvgIcon icon="change-theme" class="svgIcon" @click="handleClick" />
    </el-tooltip>
    <ColorDialog v-model="state.colorDialogShow" />
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import SvgIcon from '@/components/SvgIcon/index.vue'
  import ColorDialog from './components/ColorDialog.vue'

  interface State {
    /** 颜色选择弹框是否展示 */
    colorDialogShow: boolean
  }

  const state: State = reactive({
    colorDialogShow: false
  })

  const handleClick = () => {
    state.colorDialogShow = true
  }
</script>

<style lang="scss" scoped>
  .themeUsing {
    cursor: pointer;
    border-radius: 5px;
    background-color: #fff;

    .svgIcon {
      width: 25px;
      height: 25px;
    }
  }
</style>
