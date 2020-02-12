<template>
  <div :class="cssClasses">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      return this.fluid ? 'vc-container--fluid' : 'vc-container'
    },
  },
})
</script>

<style lang="scss" src="./VcContainer.scss" />
