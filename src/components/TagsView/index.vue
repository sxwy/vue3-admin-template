<template>
  <div class="tagsView">
    <router-link
      class="item"
      v-for="(item, index) of app.tagsViewList"
      :key="index"
      :to="{ path: item.path }"
      :class="{ item_active: item.path === route.path }"
    >
      {{ $t(`common.routes.${item.title}`) }}
      <QuickElIcon
        v-if="app.tagsViewList.length > 1"
        icon="Close"
        class="icon"
        @click.prevent="handleCloseClick(item, index)"
      />
    </router-link>
  </div>
</template>

<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router'
  import { useAppStore, type TagsViewItem } from '@/store'
  import QuickElIcon from '@/components/QuickElIcon/index.vue'

  const app = useAppStore()
  const route = useRoute()
  const router = useRouter()

  const handleCloseClick = (item: TagsViewItem, index: number) => {
    app.removeTagsView(index)
    // 如果点击的是激活项，则删除后需要跳转到上一个 tag
    if (route.path === item.path) {
      if (index === 0) {
        router.push(app.tagsViewList[index].path)
      } else {
        router.push(app.tagsViewList[index - 1].path)
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
