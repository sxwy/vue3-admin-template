<template>
  <div class="appMain">
    <router-view v-slot="{ Component, route }">
      <transition name="appMain" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
  import { watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useAppStore } from '@/store'

  const app = useAppStore()
  const route = useRoute()

  watch(
    route,
    (to) => {
      app.updateTagsView({
        name: to.name as string,
        fullPath: to.fullPath,
        meta: to.meta
      })
    },
    {
      immediate: true
    }
  )
</script>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .appMain {
    box-sizing: border-box;
    min-height: 100%;
    // 50px：header，38px：tagsView
    padding: calc(50px + 38px + $pagePading) $pagePading $pagePading;
    background-color: #eee;
    position: relative;
    overflow: hidden;
  }

  .appMain-leave-active,
  .appMain-enter-active {
    transition: all 0.5s;
  }

  .appMain-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .appMain-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
