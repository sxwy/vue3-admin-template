<template>
  <div>
    <el-form class="form" :model="state.form" inline>
      <el-form-item label="名称">
        <el-input v-model="state.form.name" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="state.form.state" placeholder="请选择" clearable>
          <el-option label="正常" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
    <div class="table">
      <div class="operation">
        <el-button type="primary">创建</el-button>
      </div>
      <el-table :data="state.table" stripe>
        <el-table-column label="名称" align="center" prop="name" />
        <el-table-column label="状态" align="center" prop="state" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue'
  import { getRoleList } from './services'

  interface Row {
    name: string
    state: number
  }

  interface State {
    /** 表单 */
    form: {
      /** 名称 */
      name: string
      /** 类型 */
      state: string | number
    }
    /** 表格 */
    table: Row[]
  }

  const state: State = reactive({
    form: {
      name: '',
      state: ''
    },
    table: []
  })

  const handlePageInit = async () => {
    try {
      const result = await getRoleList()
      state.table = result.list
    } catch (error) {}
  }

  onMounted(() => {
    handlePageInit()
  })
</script>

<style lang="scss" scoped>
  .form {
    padding: 18px 18px 0;
    background-color: #fff;
    border-radius: 6px;
  }

  .table {
    padding: 18px;
    background-color: #fff;
    border-radius: 6px;
    margin-top: 15px;

    .operation {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }
  }
</style>
