<template>
  <div class="tagsView">
    <el-scrollbar ref="scrollbarRef" @wheel="handleScroll">
      <div class="content">
        <router-link
          class="item"
          v-for="(item, index) of app.tagsViewList"
          :key="index"
          :to="{ path: item.fullPath }"
          :class="{ item_active: item.name === route.name }"
          @contextmenu.prevent="handleContextMenu(item, index, $event)"
        >
          {{ $t(`common.routes.${item.title}`) }}
          <QuickElIcon
            v-show="app.tagsViewList.length > 1"
            icon="Close"
            class="closeIcon"
            @click.prevent="handleCloseClick(item, index)"
          />
        </router-link>
      </div>
    </el-scrollbar>
    <ContextMenu
      ref="contextMenuRef"
      v-show="state.contextMenu.show"
      :item="state.clickItem"
      :index="state.clickIndex"
      :style="state.contextMenu.style"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, watch, nextTick } from 'vue'
  import { ElScrollbar } from 'element-plus'
  import { useRoute } from 'vue-router'
  import { useAppStore, type TagsViewItem } from '@/store'
  import QuickElIcon from '@/components/QuickElIcon/index.vue'
  import ContextMenu from './components/ContextMenu.vue'

  interface State {
    /** 点击的菜单 */
    clickItem: TagsViewItem
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

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar> | null>(null)
  const contextMenuRef = ref<InstanceType<typeof ContextMenu> | null>(null)

  const app = useAppStore()
  const route = useRoute()

  const state: State = reactive({
    clickItem: app.tagsViewList[0],
    clickIndex: 0,
    contextMenu: {
      show: false,
      style: {
        top: '',
        left: ''
      }
    }
  })

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

  const handleScroll = (ev: WheelEvent) => {
    scrollbarRef.value!.wrapRef!.scrollLeft =
      scrollbarRef.value!.wrapRef!.scrollLeft + ev.deltaY
  }

  const handleCloseContextMenu = () => {
    state.contextMenu.show = false
  }

  const handleContextMenu = (
    item: TagsViewItem,
    index: number,
    ev: MouseEvent
  ) => {
    state.clickIndex = index
    state.clickItem = item
    state.contextMenu.style.top = `${ev.y}px`
    state.contextMenu.style.left = `${ev.x}px`
    state.contextMenu.show = true
  }

  const handleCloseClick = (item: TagsViewItem, index: number) => {
    state.clickIndex = index
    state.clickItem = item
    nextTick(() => {
      contextMenuRef.value?.handleCloseCurrent()
    })
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .tagsView {
    box-sizing: border-box;
    width: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);

    :deep(.el-scrollbar) {
      padding: 5px 0;
    }

    :deep(.el-scrollbar__bar) {
      display: none;
    }

    :deep(a) {
      text-decoration: none;
    }

    .content {
      display: flex;

      .item {
        cursor: pointer;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid #d8dce5;
        background-color: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-right: 5px;
        color: $primaryTextColor;

        &:last-child {
          margin-right: 0;
        }

        .closeIcon {
          transition: width 0.5s;
          width: 0;
          margin-left: 5px;
        }

        &:hover .closeIcon {
          width: 14px;
        }

        &_active {
          color: $menuActiveTextColor;
          background-color: $primaryColor;
          border-color: $primaryColor;

          .closeIcon {
            width: 14px;
          }
        }
      }
    }
  }
</style>
