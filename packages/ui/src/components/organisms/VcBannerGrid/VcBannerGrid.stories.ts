import { storiesOf } from "@storybook/vue"

import VcBannerGrid from './VcBannerGrid.vue'
import VcBanner from '../../molecules/VcBanner'

storiesOf('Organisms/VcNBannerGrid', module)
  .add('Default', () => ({
    components: {
      VcBanner,
      VcBannerGrid,
    },
    template: `
    <div>
      <vc-banner-grid>
        <template v-slot:banner-A>
          <vc-banner
            sub-title="Dresses"
            title="COCKTAIL PARTY"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            background-image="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook/Home/bannerF.jpg"
          />
        </template>
        <template v-slot:banner-B>
          <vc-banner
            sub-title="Dresses"
            title="LINEN DRESSES"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            background-image="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook/Home/bannerE.jpg"
          />
        </template>
        <template v-slot:banner-C>
          <vc-banner
            sub-title="T-Shirts"
            title="THE OFFICE LIFE"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            background-image="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook/Home/bannerC.jpg"
          />
        </template>
        <template v-slot:banner-D>
          <vc-banner
            sub-title="Summer shoes"
            title="ECO SANDALS"
            description="Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands."
            background-image="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook/Home/bannerG.jpg"
          />
        </template>
      </vc-banner-grid>
    </div>
    `
  }))
