<template>
  <vc-container>
    <vc-carousel>
      <vc-carousel-item>
        <vc-banner
          subTitle="Special offer 1"
          title="Buy Black Skinny Jeans for 50$"
          description="Slim-fit stretch cotton-blend denim jeans in black. Mid-rise. Five-pocket style. Belt loops at waistband. Zip-fly. Gunmetal-tone and antiqued gold-tone hardware."
          backgroundImage="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook//SfBanner/Banner1.jpg"
        />
      </vc-carousel-item>
      <vc-carousel-item>
        <vc-banner
          subTitle="Special offer 2"
          title="Buy Black Skinny Jeans for 50$"
          description="Slim-fit stretch cotton-blend denim jeans in black. Mid-rise. Five-pocket style. Belt loops at waistband. Zip-fly. Gunmetal-tone and antiqued gold-tone hardware."
          backgroundImage="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook//SfBanner/Banner1.jpg"
        />
      </vc-carousel-item>
      <vc-carousel-item>
        <vc-banner
          subTitle="Special offer 3"
          title="Buy Black Skinny Jeans for 50$"
          description="Slim-fit stretch cotton-blend denim jeans in black. Mid-rise. Five-pocket style. Belt loops at waistband. Zip-fly. Gunmetal-tone and antiqued gold-tone hardware."
          backgroundImage="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook//SfBanner/Banner1.jpg"
        />
      </vc-carousel-item>
    </vc-carousel>
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
    const { data } = await this.$vuecomDataSource.queryCollections()
    this.collections = data.collections.edges.map(({ node }: any) => node)
  },
})
</script>
