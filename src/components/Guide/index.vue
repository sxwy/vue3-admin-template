<template>
  <div class="guide">
    <el-tooltip :content="$t('components.guide.tooltip')" effect="light">
      <SvgIcon class="svgIcon" icon="guide" @click="handleClick" />
    </el-tooltip>
  </div>
</template>

<script lang="ts" setup>
  import { driver } from 'driver.js'
  import 'driver.js/dist/driver.css'
  import SvgIcon from '@/components/SvgIcon/index.vue'
  import i18n from '@/i18n'

  const driverConfig = driver({
    allowClose: false,
    doneBtnText: i18n.global.t('components.guide.done'),
    nextBtnText: i18n.global.t('components.guide.next'),
    prevBtnText: i18n.global.t('components.guide.prev'),
    steps: [
      {
        element: '.sidebar',
        popover: {
          title: i18n.global.t('components.guide.sidebarTitle'),
          description: i18n.global.t('components.guide.sidebarDescription'),
          side: 'right',
          align: 'start'
        }
      },
      {
        element: '.hamburger',
        popover: {
          title: i18n.global.t('components.guide.hamburgerTitle'),
          description: i18n.global.t('components.guide.hamburgerDescription'),
          side: 'bottom',
          align: 'start'
        }
      },
      {
        element: '.guide',
        popover: {
          title: i18n.global.t('components.guide.guideTitle'),
          description: i18n.global.t('components.guide.guideDescription'),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.menuSearch',
        popover: {
          title: i18n.global.t('components.guide.menuSearchTitle'),
          description: i18n.global.t('components.guide.menuSearchDescription'),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.screenFull',
        popover: {
          title: i18n.global.t('components.guide.screenFullTitle'),
          description: i18n.global.t('components.guide.screenFullDescription'),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.themeUsing',
        popover: {
          title: i18n.global.t('components.guide.themeUsingTitle'),
          description: i18n.global.t('components.guide.themeUsingDescription'),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.langDropdown',
        popover: {
          title: i18n.global.t('components.guide.langDropdownTitle'),
          description: i18n.global.t(
            'components.guide.langDropdownDescription'
          ),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.navbarUserDropdown',
        popover: {
          title: i18n.global.t('components.guide.navbarUserDropdownTitle'),
          description: i18n.global.t(
            'components.guide.navbarUserDropdownDescription'
          ),
          side: 'bottom',
          align: 'end'
        }
      },
      {
        element: '.tagsView',
        popover: {
          title: i18n.global.t('components.guide.tagsViewTitle'),
          description: i18n.global.t('components.guide.tagsViewDescription'),
          side: 'bottom',
          align: 'center'
        }
      }
    ]
  })

  const handleClick = () => {
    driverConfig.drive()
  }
</script>

<style lang="scss" scoped>
  .guide {
    cursor: pointer;

    .svgIcon {
      width: 22px;
      height: 22px;
    }
  }
</style>
