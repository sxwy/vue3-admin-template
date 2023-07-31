<template>
  <div class="container">
    <div class="content">
      <LangDropdown class="langDropdown" @langChange="handleLangChange" />
      <div class="title">{{ $t('login.title') }}</div>
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
            clearable
            :prefix-icon="User"
            @keydown.enter="handleLoginClick"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="state.form.password"
            type="password"
            clearable
            show-password
            :prefix-icon="Lock"
            @keydown.enter="handleLoginClick"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="state.btnLoading"
            type="primary"
            class="btn"
            @click="handleLoginClick"
          >
            {{ $t('login.btnText') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { type FormInstance, type FormRules, ElMessage } from 'element-plus'
  import { User, Lock } from '@element-plus/icons-vue'
  import LangDropdown from '@/components/LangDropdown/index.vue'
  import { useUserStore } from '@/store'
  import i18n from '@/i18n'
  import type { LoginQuery } from '@/types'

  /** 表单 */
  type Form = LoginQuery

  /** 状态 */
  interface State {
    form: Form
    /** 表单校验规则 */
    formRules: FormRules<Form>
    /** 登录按钮 loading 是否展示 */
    btnLoading: boolean
  }

  /** 表单引用 */
  const formRef = ref<FormInstance>()

  const user = useUserStore()
  const router = useRouter()

  const state: State = reactive({
    /** 表单 */
    form: {
      account: 'admin',
      password: '123456'
    },
    /** 校验规则 */
    formRules: {
      /** 账号 */
      account: [
        {
          required: true,
          trigger: 'blur',
          message: i18n.global.t('login.accountRuleMessage')
        }
      ],
      /** 密码 */
      password: [
        {
          required: true,
          trigger: 'blur',
          message: i18n.global.t('login.passwordRuleMessage')
        }
      ]
    },
    /** 登录按钮 loading 是否显示 */
    btnLoading: false
  })

  /** 点击登录按钮 */
  const handleLoginClick = () => {
    formRef.value!.validate(async (valid) => {
      if (valid) {
        try {
          state.btnLoading = true
          await user.loginInit({
            account: state.form.account,
            password: state.form.password
          })
          router.push('/')
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

  /** 切换语言回调 */
  const handleLangChange = () => {
    formRef.value!.resetFields()
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
      position: relative;

      .langDropdown {
        position: absolute;
        top: -50px;
        right: 0;
      }

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
