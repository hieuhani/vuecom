<template>
  <div class="vc-dashboard">
    <div class="vc-dashboard__sidebar">
      <slot name="sidebar" />
    </div>
    <div class="vc-dashboard__main">
      <div class="vc-dashboard__navigation">
        <slot name="navigation" />
      </div>
      <div class="vc-dashboard__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcDashboard',
})
</script>

<style lang="scss">
.vc-dashboard {
  display: flex;
  flex-direction: row;
  height: 100vh;
  &__sidebar {
    width: 200px;
    display: flex;
  }
  &__main {
    flex: 1;
  }
}
</style>
