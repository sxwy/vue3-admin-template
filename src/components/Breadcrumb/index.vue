<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb" appear>
      <el-breadcrumb-item
        v-for="(item, index) of state.dataList"
        :key="item.path"
      >
        <span v-if="index === state.dataList.length - 1" class="noRedirect">
          {{ $t(`common.routes.${item.meta.title}`) }}
        </span>
        <a v-else class="redirect" @click.prevent="handleLinkClick(item)">
          {{ $t(`common.routes.${item.meta.title}`) }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
  import { watch, reactive } from 'vue'
  import { type RouteLocationMatched, useRoute, useRouter } from 'vue-router'

  interface State {
    /** 路由数据列表 */
    dataList: RouteLocationMatched[]
  }

  const state: State = reactive({
    dataList: []
  })

  const route = useRoute()
  const router = useRouter()

  const handleGetDataList = () => {
    state.dataList = route.matched.filter(
      (item) => item.meta && item.meta.title
    )
  }

  watch(
    route,
    () => {
      handleGetDataList()
    },
    {
      immediate: true
    }
  )

  /**
   * 点击跳转链接
   * @param item 当前的点击项
   */
  const handleLinkClick = (item: RouteLocationMatched) => {
    router.push(item.path)
  }
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .breadcrumb {
    .noRedirect {
      color: #97a8be;
      cursor: text;
    }

    .redirect {
      color: $primaryTextColor;
      font-weight: 600;
    }
  }

  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter-from,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(30px);
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
