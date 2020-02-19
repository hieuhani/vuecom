<template>
  <div ref="swiper" class="vc-carousel swiper-container" :style="style">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div v-if="hasPagination" class="swiper-pagination"></div>

    <div v-if="hasNavigation" class="swiper-button-prev"></div>
    <div v-if="hasNavigation" class="swiper-button-next"></div>

    <div v-if="hasScrollbar" class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'

export default Vue.extend({
  name: 'VcCarousel',
  props: {
    hasNavigation: {
      type: Boolean,
      default: false,
    },
    hasScrollbar: {
      type: Boolean,
      default: false,
    },
    hasPagination: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const options: any = {}
      if (this.hasPagination) {
        options.pagination = {
          el: '.swiper-pagination',
        }
      }
      if (this.hasNavigation) {
        options.navigation = {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
      if (this.hasScrollbar) {
        options.scrollbar = {
          el: '.swiper-scrollbar',
        }
      }
      const swiper = new Swiper(this.$refs.swiper, options)
      this.swiper = swiper
    })
  },
  computed: {
    style() {
      return {
        '--swiper-navigation-size': '44px',
        '--swiper-navigation-color': '#555',
        '--swiper-theme-color': '#555',
      }
    },
  },
})
</script>

<style lang="scss">
@import "./swiper.scss";
</style>
