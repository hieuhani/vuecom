<template>
  <table :class="cssClasses">
    <slot />
  </table>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcTable',
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const classes = ['vc-table']
      if (this.bordered) {
        classes.push('vc-table--bordered')
      }
      if (this.borderless) {
        classes.push('vc-table--borderless')
      }
      if (this.striped) {
        classes.push('vc-table--striped')
      }
      if (this.hover) {
        classes.push('vc-table--hover')
      }
      return classes
    }
  }
})
</script>

<style lang="scss">
@import './VcTable';
</style>
