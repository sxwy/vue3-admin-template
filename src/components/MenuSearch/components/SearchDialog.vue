<template>
  <el-dialog
    class="searchDialog"
    width="650px"
    append-to-body
    draggable
    :show-close="false"
    :model-value="modelValue"
    @close="handleClose"
  >
    <el-input
      ref="inputRef"
      v-model="state.searchContent"
      size="large"
      class="input"
      :placeholder="$t('components.menuSearch.inputPlaceholder')"
      :prefix-icon="Search"
      clearable
      @input="handleInputChange"
    />
    <div class="result">
      <el-scrollbar v-if="state.searchResult.length">
        <div
          class="item"
          v-for="(item, index) of state.searchResult"
          :key="index"
          :data-index="index"
          :class="{ item_active: state.activeIndex === index }"
          @click="handleItemClick(item)"
          @mouseenter="handleMouseEnter(index)"
          >{{ item.title }}</div
        >
      </el-scrollbar>
      <div v-else class="empty">{{ $t('components.menuSearch.empty') }}</div>
    </div>
    <div class="footer">
      <div class="tipItem">
        <SvgIcon icon="enter" class="svgIcon" />
        <span>{{ $t('components.menuSearch.enter') }}</span>
      </div>
      <div class="tipItem">
        <SvgIcon icon="top" class="svgIcon" />
        <SvgIcon icon="bottom" class="svgIcon" />
        <span>{{ $t('components.menuSearch.upDown') }}</span>
      </div>
      <div class="tipItem">
        <SvgIcon icon="esc" class="svgIcon" />
        <span>{{ $t('components.menuSearch.esc') }}</span>
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

  const handleMouseEnter = (index: number) => {
    state.activeIndex = index
  }

  const handleInit = (show: boolean) => {
    if (show) {
      setTimeout(() => {
        inputRef.value?.focus() // 自动聚焦
      }, 0)
      document.addEventListener('keydown', handleKeyUpDown)
    } else {
      document.removeEventListener('keydown', handleKeyUpDown)
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
    handleClose()
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
    .input {
      padding: 15px 15px 0;
    }

    .result {
      // padding: 0 15px;
      :deep(.el-scrollbar__wrap) {
        max-height: 400px;
      }

      .item {
        cursor: pointer;
        margin: 10px 20px;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 1px 3px #d4d9e1;

        &:last-child {
          margin-bottom: 10px;
        }

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
      padding: 15px;
      display: flex;
      align-items: center;
      border-top: 1px solid #eee;

      .svgIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 18px;
        box-shadow: rgb(205 205 230) 0 -2px inset,
          rgb(255 255 255) 0 0 1px 1px inset, rgb(30 35 90 / 40%) 0 1px 2px 1px;
        border-radius: 2px;
        margin-right: 5px;
      }

      .tipItem {
        display: flex;
        align-items: center;
        margin-right: 20px;
      }
    }
  }
</style>
