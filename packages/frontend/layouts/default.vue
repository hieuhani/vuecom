<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationBar from '../components/NavigationBar.vue'

export default Vue.extend({
  components: {
    NavigationBar,
  },
})
</script>
