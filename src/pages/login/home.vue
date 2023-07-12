<template>
  <div class="container">
    <div class="content">
      <div class="title">登录</div>
      <el-form
        :status-icon="true"
        :model="state.form"
        :rules="state.formRules"
        ref="formRef"
        class="form"
      >
        <el-form-item prop="account">
          <el-input
            v-model="state.form.account"
            :prefix-icon="User"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="state.form.password"
            type="password"
            :prefix-icon="Lock"
            clearable
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="state.btnLoading"
            type="primary"
            class="btn"
            @click="handleLoginClick"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { type FormInstance, type FormRules, ElMessage } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'
  import { submitLoginInfo } from './service'

  /** 表单 */
  interface Form {
    /** 账号 */
    account: string
    /** 密码 */
    password: string
  }

  /** 状态 */
  interface State {
    form: Form
    /** 表单校验规则 */
    formRules: FormRules<Form>
    /** 登录按钮 loading 是否展示 */
    btnLoading: boolean
  }

  const state: State = reactive({
    form: {
      account: 'admin',
      password: '123456'
    },
    formRules: {
      account: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      ]
    },
    btnLoading: false
  })

  /** 表单引用 */
  const formRef = ref<FormInstance>()

  /** 点击登录按钮 */
  const handleLoginClick = () => {
    formRef.value!.validate(async (valid) => {
      if (valid) {
        try {
          state.btnLoading = true
          const result = await submitLoginInfo({
            account: state.form.account,
            password: state.form.password
          })
          console.log(
            '%c result==========>',
            'color: #4FC08D; font-weight: bold',
            result
          )
        } catch (error: any) {
          ElMessage({
            type: 'error',
            message: error.message || '登录失败'
          })
        } finally {
          state.btnLoading = false
        }
      }
    })
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #293146;

    .content {
      width: 470px;
      padding: 30px;
      background-color: #fff;
      border-radius: 10px;

      .title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
      }

      .form {
        margin-top: 20px;

        .btn {
          width: 100%;
          margin-top: 20px;
        }
      }
    }
  }
</style>
