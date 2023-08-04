<template>
  <el-dialog
    class="searchDialog"
    append-to-body
    draggable
    :show-close="false"
    :model-value="modelValue"
    @close="handleClose"
  >
    <div class="content">
      <el-input
        v-model="state.searchContent"
        :placeholder="$t('components.menuSearch.inputPlaceholder')"
        :prefix-icon="Search"
        clearable
        @input="handleInputChange"
      />
      <div
        v-for="(item, index) of state.searchResult"
        :key="index"
        @click="handleRouteClick(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { reactive, computed } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  import Fuse from 'fuse.js'
  import { filterRoutes, generateMenus } from '@/utils'
  import { generateFuseData } from '../utils'
  import type { SearchResultItem } from '../type'

  interface Props {
    /** 弹框是否展示 */
    modelValue: boolean
  }

  interface State {
    /** 搜索内容 */
    searchContent: string
    /** 搜索结果 */
    searchResult: SearchResultItem[]
  }

  withDefaults(defineProps<Props>(), {
    modelValue: false
  })

  const emits = defineEmits(['update:modelValue'])

  const state: State = reactive({
    searchContent: '',
    searchResult: []
  })

  const router = useRouter()

  const routes = computed(() => {
    const routeList = filterRoutes(router.getRoutes())
    const menus = generateMenus(routeList)
    return generateFuseData(menus)
  })

  const fuse = new Fuse(routes.value, {
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

  const handleClose = () => {
    emits('update:modelValue', false)
  }

  const handleInputChange = () => {
    const result = fuse.search(state.searchContent)
    console.log(
      '%c result==========>',
      'color: #4FC08D; font-weight: bold',
      result
    )
    state.searchResult = result.map((item) => item.item)
  }

  const handleRouteClick = (item: SearchResultItem) => {
    router.push(item.path)
  }
</script>

<style lang="scss" scoped></style>
