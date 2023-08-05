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
        ref="inputRef"
        v-model="state.searchContent"
        size="large"
        :placeholder="$t('components.menuSearch.inputPlaceholder')"
        :prefix-icon="Search"
        clearable
        @input="handleInputChange"
      />
      <div ref="resultRef" class="result">
        <template v-if="state.searchResult.length">
          <div
            class="item"
            v-for="(item, index) of state.searchResult"
            :key="index"
            :data-index="index"
            :class="{ item_active: state.activeIndex === index }"
            @click="handleItemClick(item)"
            >{{ item.title }}</div
          >
        </template>
        <div v-else class="empty">暂无数据</div>
      </div>
      <div class="footer">
        <SvgIcon icon="enter" class="icon" />
        <SvgIcon icon="top" class="icon" />
        <SvgIcon icon="bottom" class="icon" />
        <SvgIcon icon="esc" class="icon" />
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { ref, reactive, computed, watch } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router'
  import Fuse from 'fuse.js'
  import SvgIcon from '@/components/SvgIcon/index.vue'
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
    /** 当前选择的下标 */
    activeIndex: number
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: false
  })

  const emits = defineEmits(['update:modelValue'])

  const inputRef = ref<HTMLInputElement | null>(null)
  const resultRef = ref<HTMLInputElement | null>(null)

  const state: State = reactive({
    searchContent: '',
    searchResult: [],
    activeIndex: 0
  })

  const router = useRouter()

  const routes = computed(() => {
    const routeList = filterRoutes(router.getRoutes())
    const menus = generateMenus(routeList)
    return generateFuseData(menus)
  })

  watch(
    () => props.modelValue,
    (val) => {
      handleInit(val)
    }
  )

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

  const handleKeyUpDown = (ev: KeyboardEvent) => {
    if (!state.searchResult.length) {
      return
    }
    const len = state.searchResult.length - 1
    if (ev.key === 'ArrowUp') {
      if (state.activeIndex === 0) {
        state.activeIndex = len
      } else {
        state.activeIndex--
      }
    } else if (ev.key === 'ArrowDown') {
      if (state.activeIndex === len) {
        state.activeIndex = 0
      } else {
        state.activeIndex++
      }
    } else if (ev.key === 'Enter') {
      handleItemClick(state.searchResult[state.activeIndex])
    }
  }

  const handleMouseEnter = (ev: MouseEvent) => {
    // 因为是事件捕获，所以判断是当前的父元素则不处理，只处理子元素
    if (ev.target === resultRef.value) {
      return
    }
    const index = parseInt((ev.target as HTMLElement).dataset.index as string)
    state.activeIndex = index
  }

  const handleInit = (show: boolean) => {
    if (show) {
      setTimeout(() => {
        inputRef.value?.focus() // 自动聚焦
        resultRef.value!.addEventListener('mouseenter', handleMouseEnter, {
          capture: true
        })
      }, 0)
      document.addEventListener('keydown', handleKeyUpDown)
    } else {
      document.removeEventListener('keydown', handleKeyUpDown)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }

  const handleClose = () => {
    state.searchContent = ''
    state.searchResult = []
    emits('update:modelValue', false)
  }

  const handleInputChange = () => {
    const result = fuse.search(state.searchContent)
    state.searchResult = result.map((item) => item.item)
    state.activeIndex = 0
  }

  const handleItemClick = (item: SearchResultItem) => {
    router.push(item.path)
  }
</script>

<style lang="scss">
  .searchDialog {
    border-radius: 16px !important;

    .el-dialog__header {
      padding: 0;
      margin: 0;
    }

    .el-dialog__body {
      padding: 0;
    }
  }
</style>

<style lang="scss" scoped>
  @import '@/styles/variables.module.scss';

  .searchDialog {
    .content {
      padding: 15px 15px 0;

      .result {
        .item {
          cursor: pointer;
          margin-top: 10px;
          padding: 10px;
          border-radius: 5px;

          &_active {
            color: $menuHoverTextColor;
            background-color: $subMenuActiveBgColor;
          }
        }
      }

      .empty {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .footer {
        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 18px;
          box-shadow: rgb(205 205 230) 0 -2px inset,
            rgb(255 255 255) 0 0 1px 1px inset,
            rgb(30 35 90 / 40%) 0 1px 2px 1px;
          border-radius: 2px;
        }
      }
    }
  }
</style>
