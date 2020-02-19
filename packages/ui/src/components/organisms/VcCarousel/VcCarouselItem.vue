<template>
  <div class="vc-carousel-item swiper-slide">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcCarouselItem',
})
</script>
