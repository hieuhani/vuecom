<template>
  <div>
    <vc-container>
      <nuxt-link to="/auth/sign_in">
        <vc-button variant="primary">Sign in</vc-button>
      </nuxt-link>
    </vc-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log('MTP', this.$vueFrontDataSource.mtp())
  },
})
</script>
