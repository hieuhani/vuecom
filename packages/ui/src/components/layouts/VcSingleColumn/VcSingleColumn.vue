<template>
  <vc-container class="vc-single-column">
    <div class="vc-single-column__header">
      <slot name="header" />
    </div>
    <div class="vc-single-column__body">
      <slot />
    </div>
    <div class="vc-single-column__footer">
      <slot name="footer" />
    </div>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcContainer } from '../../atoms/VcContainer'
export default Vue.extend({
  name: 'VcSingleColumn',
  components: {
    VcContainer,
  },
})
</script>
