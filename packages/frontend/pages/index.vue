<template>
  <vc-container>
    <nuxt-link to="/auth/sign_in">Sign In</nuxt-link>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcContainer } from '@vuecommerce/ui'

export default Vue.extend({
  components: {
    VcContainer,
  },
})
</script>
