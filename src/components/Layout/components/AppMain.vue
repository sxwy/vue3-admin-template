<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .app-main {
    box-sizing: border-box;
    height: 100%;
    padding: 104px 20px 20px;
  }
</style>
