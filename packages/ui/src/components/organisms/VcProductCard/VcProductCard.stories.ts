import { storiesOf } from "@storybook/vue"

import VcProductCard from './VcProductCard.vue'

storiesOf("Organisms/VcProductCard", module)
  .add("Default", () => ({
    components: {
      VcProductCard,
    },
    template: `
    <div>
      <vc-product-card
        style="width: 250px"
        title="Product name"
        :price="98.99"
        image="https://cdn.shopify.com/s/files/1/1312/0893/products/001_grande.jpg"
      />
    </div>
    `
  }))
