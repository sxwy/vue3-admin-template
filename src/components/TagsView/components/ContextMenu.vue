<template>
  <div class="contextMenu">
    <div class="item" @click="handleRefresh">刷新</div>
    <div class="item" @click="handleCloseCurrent">关闭当前</div>
    <div class="item" @click="handleCloseRight">关闭右侧</div>
    <div class="item" @click="handleCloseOther">关闭其他</div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store'
  import {
    type RouteLocationNormalizedLoaded,
    useRoute,
    useRouter
  } from 'vue-router'

  interface Props {
    /** 当前点击的菜单 */
    item: RouteLocationNormalizedLoaded | null
    /** 当前点击的菜单下标 */
    index: number
  }

  const props = withDefaults(defineProps<Props>(), {
    item: null,
    index: 0
  })

  const app = useAppStore()
  const route = useRoute()
  const router = useRouter()

  const handleRefresh = () => {
    const currentTag = app.tagsViewList[props.index]
    if (route.name === currentTag.name) {
      router.go(0)
    } else {
      router.push(currentTag.fullPath)
    }
  }

  const handleCloseCurrent = () => {
    app.removeTagsView(props.index)
    // 如果点击的是激活项，则删除后需要跳转到上一个 tag
    if (route.name === props.item!.name) {
      if (props.index === 0) {
        router.push(app.tagsViewList[props.index].fullPath)
      } else {
        router.push(app.tagsViewList[props.index - 1].fullPath)
      }
    }
  }

  const handleCloseRight = () => {
    app.clearRightTagsView(props.index)
    const isFind = app.tagsViewList.find((item) => item.name === route.name)
    // 如果当前激活的 tag 被删除，则需要跳转到最后一个
    if (!isFind) {
      const lastTag = app.tagsViewList[app.tagsViewList.length - 1]
      router.push(lastTag.fullPath)
    }
  }

  const handleCloseOther = () => {
    app.clearOtherTagsView(props.index)
    router.push(props.item!.fullPath)
  }

  defineExpose({
    handleRefresh,
    handleCloseCurrent,
    handleCloseRight,
    handleCloseOther
  })
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .contextMenu {
    position: fixed;
    z-index: 9;
    background-color: #fff;
    padding: 5px;
    border-radius: 4px;
    font-size: 12px;
    color: $primaryTextColor;
    box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);

    .item {
      padding: 10px;
      flex-shrink: 0;
      cursor: pointer;

      &:hover {
        color: $menuActiveTextColor;
        background-color: $primaryColor;
      }
    }
  }
</style>
