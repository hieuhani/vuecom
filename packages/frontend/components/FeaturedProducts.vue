<template>
  <vc-container class="featured-products">
    <vc-row>
      <vc-col
        v-for="product in products"
        :key="product.id"
        md="3"
      >
        <vc-product-card
          :to="`/products/${product.handle}`"
          :title="product.title"
          :price="product.price"
          :image="product.image"
        />
      </vc-col>
    </vc-row>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      products: [],
    }
  },
  async mounted() {
    const { data } = await this.$vuecomDataSource.queryProducts()
    this.products = data.products.edges.map(({ node }: any) => {
      return {
        id: node.id,
        handle: node.handle,
        title: node.title,
        price: node.priceRange.maxVariantPrice.amount,
        image: node.images.edges[0].node.originalSrc,
      }
    })
  },
})
</script>

<style lang="scss">
.featured-products {
  padding-top: 1rem;
  padding-bottom: 1rem;
  .vc-product-card {
    text-decoration: none;
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
