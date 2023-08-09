<template>
  <div class="tagsView">
    <router-link
      class="item"
      v-for="(item, index) of app.tagsViewList"
      :key="index"
      :to="{ path: item.fullPath }"
      :class="{ item_active: item.fullPath === route.fullPath }"
      @contextmenu.prevent="handleContextMenu(index, $event)"
    >
      {{ $t(`common.routes.${item.title}`) }}
      <QuickElIcon
        v-show="app.tagsViewList.length > 1"
        icon="Close"
        class="icon"
        @click.prevent.stop="handleCloseClick(item, index)"
      />
    </router-link>
    <ContextMenu
      v-show="state.contextMenu.show"
      :index="state.clickIndex"
      :style="state.contextMenu.style"
    />
  </div>
</template>

<script lang="ts" setup>
  import { reactive, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStore, type TagsViewItem } from '@/store'
  import QuickElIcon from '@/components/QuickElIcon/index.vue'
  import ContextMenu from './components/ContextMenu.vue'

  interface State {
    /** 点击的菜单下标 */
    clickIndex: number
    /** 右键菜单 */
    contextMenu: {
      /** 是否展示 */
      show: boolean
      /** 样式 */
      style: {
        /** 上 */
        top: string
        /** 左 */
        left: string
      }
    }
  }

  const state: State = reactive({
    clickIndex: 0,
    contextMenu: {
      show: false,
      style: {
        top: '',
        left: ''
      }
    }
  })

  const app = useAppStore()
  const route = useRoute()
  const router = useRouter()

  watch(
    () => state.contextMenu.show,
    (val) => {
      if (val) {
        document.addEventListener('click', handleCloseContextMenu)
      } else {
        document.removeEventListener('click', handleCloseContextMenu)
      }
    }
  )

  const handleCloseContextMenu = () => {
    state.contextMenu.show = false
  }

  const handleContextMenu = (index: number, ev: MouseEvent) => {
    state.clickIndex = index
    state.contextMenu.style.top = `${ev.y}px`
    state.contextMenu.style.left = `${ev.x}px`
    state.contextMenu.show = true
  }

  const handleCloseClick = (item: TagsViewItem, index: number) => {
    app.removeTagsView(index)
    // 如果点击的是激活项，则删除后需要跳转到上一个 tag
    if (route.fullPath === item.fullPath) {
      if (index === 0) {
        router.push(app.tagsViewList[index].fullPath)
      } else {
        router.push(app.tagsViewList[index - 1].fullPath)
      }
    }
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
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #d8dce5;
      background-color: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-right: 5px;
      color: $primaryTextColor;

      .icon {
        transition: width 0.5s;
        width: 0;
        margin-left: 5px;
      }

      &:hover .icon {
        width: 14px;
      }

      &_active {
        color: $menuActiveTextColor;
        background-color: $primaryColor;
        border-color: $primaryColor;

        .icon {
          width: 14px;
        }
      }
    }
  }
</style>
