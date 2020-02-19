<template>
  <div>
    <front-collections class="mb-3" />
    <featured-categories />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FrontCollections from '../components/FrontCollections.vue'
import FeaturedCategories from '../components/FeaturedCategories.vue'

export default Vue.extend({
  components: {
    FrontCollections,
    FeaturedCategories,
  },
})
</script>
