<template>
  <div>
    首页
    <el-button type="primary" @click="handleClick">跳转测试</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const handleClick = () => {
    router.push('/system/role/index')
  }
</script>

<style lang="scss" scoped></style>
