import { storiesOf } from '@storybook/vue'

import VcBanner from './VcBanner.vue'

storiesOf('Molecules/VcBanner', module)
  .add('Default', () => ({
    components: {
      VcBanner,
    },
    template: `
    <div>
      <vc-banner
        subTitle="Special offer"
        title="Buy Black Skinny Jeans for 50$"
        description="Slim-fit stretch cotton-blend denim jeans in black. Mid-rise. Five-pocket style. Belt loops at waistband. Zip-fly. Gunmetal-tone and antiqued gold-tone hardware."
        backgroundImage="https://deploy-preview-480--storefrontui-storybook.netlify.com/assets/storybook//SfBanner/Banner1.jpg"
      />
    </div>
    `
  }))
