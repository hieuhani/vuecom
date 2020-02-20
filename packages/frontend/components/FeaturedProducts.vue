<template>
  <vc-container>
    <vc-row>
      <vc-col
        v-for="product in products"
        :key="product.id"
      >
        <a :to="`/products/${product.handle}`">{{ product.title }}</a>
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
    const { data } = await this.$vueFrontDataSource.queryProducts()
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
