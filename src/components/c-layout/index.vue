<template>
  <div class="c-layout">
    c-layout
    <Sidebar />
    <Navbar />
    <AppMain />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from './components/Sidebar/index.vue'
  import Navbar from './components/Navbar.vue'
  import AppMain from './components/AppMain.vue'
</script>

<style scoped lang="scss"></style>
