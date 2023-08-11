<template>
  <div class="menuSearch">
    <el-tooltip :content="$t('components.menuSearch.tooltip')" effect="light">
      <SvgIcon class="svgIcon" icon="search" @click="handleClick" />
    </el-tooltip>
    <SearchDialog v-model="state.searchDialogShow" />
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import SvgIcon from '@/components/SvgIcon/index.vue'
  import SearchDialog from './components/SearchDialog.vue'

  interface State {
    /** 搜索弹框是否展示 */
    searchDialogShow: boolean
  }

  const state: State = reactive({
    searchDialogShow: false
  })

  const handleClick = () => {
    state.searchDialogShow = true
  }
</script>

<style lang="scss" scoped>
  .menuSearch {
    cursor: pointer;

    .svgIcon {
      width: 22px;
      height: 22px;
    }
  }
</style>
