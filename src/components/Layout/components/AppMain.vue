<template>
  <div class="appMain">
    <router-view v-slot="{ Component, route }">
      <transition name="appMain" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

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
