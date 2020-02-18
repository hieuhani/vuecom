<template>
  <div class="vc-navbar">
    <slot />
  </div>
</template>


<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { VcNav, VcNavItem } from '../../molecules/VcNav'
import { VcButton } from '../../atoms/VcButton'

export default createComponent({
  name: 'VcNavBar',
})
</script>

<style lang="scss">
.vc-navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
