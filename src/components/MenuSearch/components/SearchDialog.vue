<template>
  <el-dialog
    class="searchDialog"
    append-to-body
    draggable
    :title="$t('common.tipText')"
    :model-value="modelValue"
    @close="handleClose"
  >
    <div class="content">
      <el-select
        v-model="state.searchResult"
        remote
        filterable
        default-first-option
        :remote-method="handleQuerySearch"
        @change="handleSelectChange"
      >
        <el-option
          v-for="option of state.searchOptions"
          :key="option.item.path"
          :label="option.item.title"
          :value="option.item.path"
        ></el-option>
      </el-select>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{
          $t('common.cancelText')
        }}</el-button>
        <el-button type="primary" @click="handleConfirm">
          {{ $t('common.confirmText') }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { reactive, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Fuse from 'fuse.js'
  import { filterRoutes, generateMenus } from '@/utils'
  import { generateFuseData } from '../utils'

  interface Props {
    /** 弹框是否展示 */
    modelValue: boolean
  }

  interface State {
    /** 搜索结果 */
    searchResult: string
    /** 搜索列表 */
    searchOptions: any[]
  }

  withDefaults(defineProps<Props>(), {
    modelValue: false
  })

  const emits = defineEmits(['update:modelValue'])

  const state: State = reactive({
    searchResult: '',
    searchOptions: []
  })

  const router = useRouter()

  const routes = computed(() => {
    const routeList = filterRoutes(router.getRoutes())
    const menus = generateMenus(routeList)
    return generateFuseData(menus)
  })

  const handleClose = () => {
    emits('update:modelValue', false)
  }

  const handleConfirm = () => {
    handleClose()
  }

  let fuse: Fuse<any>
  const initFuse = (searchPool: any[]) => {
    fuse = new Fuse(searchPool, {
      // 是否按优先级进行排序
      shouldSort: true,
      // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
      threshold: 0.4,
      // 匹配长度超过这个值的才会被认为是匹配的
      minMatchCharLength: 1,
      // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
      // name：搜索的键
      // weight：对应的权重
      keys: [
        {
          name: 'title',
          weight: 0.7
        },
        {
          name: 'path',
          weight: 0.3
        }
      ]
    })
  }
  initFuse(routes.value)

  const handleQuerySearch = (query: string) => {
    console.log(
      '%c query==========>',
      'color: #4FC08D; font-weight: bold',
      query
    )
    if (query) {
      state.searchOptions = fuse.search(query)
    } else {
      state.searchOptions = []
    }
  }

  const handleSelectChange = (val: any) => {
    console.log('%c val==========>', 'color: #4FC08D; font-weight: bold', val)
    state.searchResult = val.path
    // router.push(val.path)
  }
</script>

<style lang="scss" scoped></style>
