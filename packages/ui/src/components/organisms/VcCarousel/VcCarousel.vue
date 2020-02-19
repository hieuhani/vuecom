<template>
  <div ref="swiper" class="vc-carousel swiper-container" :style="style">
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper'

export default Vue.extend({
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper(this.$refs.swiper, {
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })
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
