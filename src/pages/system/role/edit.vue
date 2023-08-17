<template>
  <div>
    role/edit
    <el-button type="primary" @click="handleClick">按钮</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const handleClick = () => {
    router.back()
  }
</script>

<style lang="scss" scoped></style>
