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
      const { fullPath, meta } = to
      app.addTagsView({
        title: meta.title,
        fullPath
      })
    },
    {
      immediate: true
    }
  )
</script>

<style lang="scss" scoped>
  .appMain {
    box-sizing: border-box;
    height: 100%;
    padding: 104px 20px 20px;
    background-color: #eee;
  }

  .appMain-leave-active,
  .appMain-enter-active {
    transition: all 0.5s;
    position: absolute;
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
