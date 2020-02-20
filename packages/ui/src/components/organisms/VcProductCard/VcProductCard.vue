<template>
  <vc-link :to="to" class="vc-product-card" :style="style">
    <div class="vc-product-card__image-wrapper">
      <img :src="image" />
    </div>
    <div class="vc-product-card__info">
      <h5 class="title">{{ title }}</h5>
      <span class="price">${{ price }}</span>
    </div>
  </vc-link>
</template>

<script lang="ts">
import Vue from 'vue'
import VcLink from '../../atoms/VcLink'

export default Vue.extend({
  name: 'VcProductCard',
  components: {
    VcLink,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: [Number, String],
    },
    image: {
      type: String,
    },
    textAlign: {
      type: String,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    style() {
      return {
        '--info-text-align': this.textAlign,
      }
    }
  },
})
</script>


<style lang="scss">
.vc-product-card {
  display: block;
  &__image-wrapper {
    img {
      width: 100%;
    }
  }
  &__info {
    padding-top: $spacer / 2;
    text-align: var(--info-text-align);
    .title {
      margin-bottom: 0;
    }
    .price {
      font-size: .95rem;
    }
  }
}
</style>
