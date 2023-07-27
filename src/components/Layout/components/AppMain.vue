<template>
  <div class="appMain">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
  .appMain {
    box-sizing: border-box;
    height: 100%;
    padding: 104px 20px 20px;
  }
</style>
