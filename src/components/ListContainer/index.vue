<template>
  <div class="listContainer">
    <div v-if="slot.form" class="form">
      <slot name="form" />
    </div>
    <div class="content">
      <div v-if="slot.operation" class="operation">
        <slot name="operation" />
      </div>
      <slot v-if="slot.table" name="table" />
      <div v-if="slot.pagination" class="pagination">
        <slot name="pagination" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useSlots } from 'vue'

  const slot = useSlots()
</script>

<style lang="scss" scoped>
  .listContainer {
    .form {
      padding: 18px 18px 0;
      background-color: #fff;
      border-radius: 6px;
      margin-bottom: 15px;
    }

    .content {
      padding: 18px;
      background-color: #fff;
      border-radius: 6px;

      .operation {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
      }

      .pagination {
        margin-top: 5px;
      }
    }
  }
</style>
