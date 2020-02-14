<template>
  <div class="vc-navbar">
    <div class="vc-navbar__logo">
      Logo
    </div>
    <vc-nav>
      <vc-nav-item href="#orange">
        Orange
      </vc-nav-item>
      <vc-nav-item href="#banana">
        Banana
      </vc-nav-item>
      <vc-nav-item href="#watermelon">
        Watermelon
      </vc-nav-item>
    </vc-nav>
    <div>
      <vc-button variant="primary" outline>Sign In</vc-button>
      <vc-button class="ml-2" variant="primary">Sign Up</vc-button>
    </div>
  </div>
</template>


<script lang="ts">
import { createComponent } from '@vue/composition-api'
import { VcNav, VcNavItem } from '../../molecules/VcNav'
import { VcButton } from '../../atoms/VcButton'

export default createComponent({
  name: 'VcNavigation',
  components: {
    VcNav,
    VcButton,
    VcNavItem,
  },
})
</script>

<style lang="scss">
.vc-navbar {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__logo {
    font-size: 1.5rem;
    margin-right: auto;
  }
}
</style>
