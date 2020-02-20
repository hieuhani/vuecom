<template>
  <div class="vc-row">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcRow',
  props: {
    noGutter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const classes: string[] = []
      if (this.noGutter) {
        classes.push('vc-row--no-gutter')
      }
      return classes
    }
  },
})
</script>

<style lang="scss">
@import './scss/mixins';
.vc-row {
  @include make-row();
  &--no-gutter {
    margin-right: 0;
    margin-left: 0;
      > .vc-col,
      > [class*="vc-col-"] {
        padding-right: 0;
        padding-left: 0;
      }
  }
}
</style>
