<template>
  <div>
    <el-form ref="formRef" class="form" :model="state.form" inline>
      <el-form-item label="名称" prop="name">
        <el-input v-model="state.form.name" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-select v-model="state.form.state" placeholder="请选择" clearable>
          <el-option label="正常" :value="1" />
          <el-option label="禁用" :value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handlePageInit">搜索</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="content">
      <div class="operation">
        <el-button type="primary" @click="handleAdd">创建</el-button>
      </div>
      <div class="table" v-loading="state.table.loading">
        <el-table :data="state.table.dataList" stripe>
          <el-table-column label="名称" align="center" prop="name" />
          <el-table-column label="状态" align="center" prop="stateStr" />
          <el-table-column label="操作" align="center">
            <template #default="scope">
              <el-button type="primary" link @click="handleEdit(scope.row)"
                >编辑</el-button
              >
              <el-button type="primary" link @click="handleDel(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          layout="total, prev, pager, next, sizes"
          :background="true"
          :current-page="state.paging.pageNo"
          :page-size="state.paging.pageSize"
          :total="state.paging.totalNum"
          :page-sizes="[5, 10, 20, 50, 100]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  import { type FormInstance, ElMessage } from 'element-plus'
  import { getRoleList } from './services'
  import type { RoleItem } from './type'

  interface State {
    /** 表单 */
    form: {
      /** 名称 */
      name?: string
      /** 类型 */
      state?: number
    }
    /** 表格 */
    table: {
      /** 数据列表 */
      dataList: RoleItem[]
      /** loading 是否显示 */
      loading: boolean
    }
    /** 分页 */
    paging: {
      /** 页码 */
      pageNo: number
      /** 页数 */
      pageSize: number
      /** 总条数 */
      totalNum: number
    }
  }

  const formRef = ref<FormInstance | null>(null)

  const state: State = reactive({
    form: {
      name: undefined,
      state: undefined
    },
    table: {
      dataList: [],
      loading: false
    },
    paging: {
      pageNo: 1,
      pageSize: 10,
      totalNum: 0
    }
  })

  /** 页面初始化 */
  const handlePageInit = async () => {
    try {
      state.table.loading = true
      const result = await getRoleList({
        ...state.form,
        pageNo: state.paging.pageNo,
        pageSize: state.paging.pageSize
      })
      state.table.dataList = result.list
      state.paging.totalNum = result.totalCount
    } catch (error: any) {
      console.log(
        '%c 获取列表数据失败==========>',
        'color: #4FC08D; font-weight: bold',
        error
      )
      ElMessage({
        type: 'error',
        message: error.message ?? '获取列表数据失败'
      })
    } finally {
      state.table.loading = false
    }
  }

  /** 分页：一页显示多少条数据 */
  const handleSizeChange = (pageSize: number) => {
    state.paging.pageNo = 1
    state.paging.pageSize = pageSize
    handlePageInit()
  }

  /** 分页：显示第几页 */
  const handleCurrentChange = (page: number) => {
    state.paging.pageNo = page
    handlePageInit()
  }

  /** 点击重置按钮 */
  const handleReset = () => {
    formRef.value!.resetFields()
  }

  /** 点击创建按钮 */
  const handleAdd = () => {
    ElMessage({
      type: 'info',
      message: '点击创建按钮'
    })
  }

  /** 点击编辑按钮 */
  const handleEdit = (row: RoleItem) => {
    console.log(
      '%c 当前点击的行==========>',
      'color: #4FC08D; font-weight: bold',
      row
    )
    ElMessage({
      type: 'info',
      message: '点击编辑按钮'
    })
  }

  /** 点击删除按钮 */
  const handleDel = (row: RoleItem) => {
    console.log(
      '%c 当前点击的行==========>',
      'color: #4FC08D; font-weight: bold',
      row
    )
    ElMessage({
      type: 'info',
      message: '点击删除按钮'
    })
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

  .content {
    padding: 18px;
    background-color: #fff;
    border-radius: 6px;
    margin-top: 15px;

    .operation {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    .pagination {
      margin-top: 15px;
    }
  }
</style>
