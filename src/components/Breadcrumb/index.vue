<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="breadcrumb" appear>
      <el-breadcrumb-item
        v-for="(item, index) of route.matched"
        :key="item.path"
      >
        <span v-if="index === route.matched.length - 1" class="noRedirect">{{
          $t(`common.routes.${item.meta.title}`)
        }}</span>
        <a v-else class="redirect" @click.prevent="handleLinkClick(item)">{{
          $t(`common.routes.${item.meta.title}`)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { type RouteLocationMatched, useRoute, useRouter } from 'vue-router'
  import variables from '@/styles/variables.module.scss'

  const route = useRoute()
  const router = useRouter()

  /** 跳转链接 hover 颜色 */
  const redirectHoverColor = computed(() => variables.menuBgColor)

  /** 点击跳转链接 */
  const handleLinkClick = (item: RouteLocationMatched) => {
    router.push(item.path)
  }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    .noRedirect {
      color: #97a8be;
      cursor: text;
    }

    .redirect {
      color: #666;
      font-weight: 600;

      &:hover {
        /* stylelint-disable-next-line */
        color: v-bind(redirectHoverColor);
      }
    }
  }

  .breadcrumb-enter-active,
  .breadcrumb-leave-active {
    transition: all 0.5s;
  }

  .breadcrumb-enter-from,
  .breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(30px);
  }

  .breadcrumb-leave-active {
    position: absolute;
  }
</style>
