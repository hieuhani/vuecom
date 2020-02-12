<template>
  <vc-container>
    <nuxt-link to="/auth/sign_in">
      <vc-button variant="primary">Sign in</vc-button>
    </nuxt-link>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcContainer, VcButton } from '@vuecommerce/ui'

export default Vue.extend({
  components: {
    VcContainer,
    VcButton,
  },
})
</script>
