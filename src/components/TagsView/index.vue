<template>
  <div class="tagsView">
    <router-link
      class="item"
      v-for="(item, index) of app.tagsViewList"
      :key="index"
      :to="{ path: item.path }"
      :class="{ item_active: index === state.activeIndex }"
      @click="handleItemClick(index)"
    >
      {{ $t(`common.routes.${item.title}`) }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { useAppStore } from '@/store'

  interface State {
    /** 当前选择的标签下标 */
    activeIndex: number
  }

  const app = useAppStore()

  const state: State = reactive({
    activeIndex: 0
  })

  const handleItemClick = (index: number) => {
    state.activeIndex = index
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .tagsView {
    box-sizing: border-box;
    height: 35px;
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

    :deep(a) {
      text-decoration: none;
    }

    .item {
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      background-color: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-right: 5px;
      color: $primaryTextColor;

      &:hover {
        color: $primaryColor;
        border-color: $primaryColor;
      }

      &_active {
        color: $menuActiveTextColor;
        background-color: $primaryColor;
        border-color: $primaryColor;

        &:hover {
          color: $menuActiveTextColor;
        }
      }
    }
  }
</style>
