<template>
  <vc-container>
    hello world
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      collections: [],
    }
  },
  async mounted() {
    const { data } = await this.$vueFrontDataSource.queryCollections()
    this.collections = data.collections.edges.map(({ node }: any) => node)
  },
})
</script>
