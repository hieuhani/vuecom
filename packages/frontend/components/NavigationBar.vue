<template>
  <vc-container>
    <vc-nav-bar>
      <div v-if="shop">
        <h4>
          {{ shop.name }}
        </h4>
        <p>
          {{ shop.description }}
        </p>
      </div>
      <vc-nav class="ml-auto">
        <vc-nav-item href="#orange">
          Home
        </vc-nav-item>
        <vc-nav-item href="#banana">
          Collections
        </vc-nav-item>
        <vc-nav-item href="#watermelon">
          Catalog
        </vc-nav-item>
        <vc-nav-item href="#watermelon">
          Blog
        </vc-nav-item>
        <vc-nav-item href="#watermelon">
          About us
        </vc-nav-item>
      </vc-nav>
      <div>
        <vc-button variant="primary" outline>Sign In</vc-button>
        <vc-button class="ml-2" variant="primary">Sign Up</vc-button>
      </div>
    </vc-nav-bar>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      shop: null,
    }
  },
  async mounted() {
    const { data } = await this.$vueFrontDataSource.queryShop()
    this.shop = data.shop
  },
})
</script>
