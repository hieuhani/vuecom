import { storiesOf } from "@storybook/vue"

import VcCarousel from './VcCarousel.vue'
import VcCarouselItem from './VcCarouselItem.vue'

const SlidePlaceholder = {
  props: ['index'],
  template: `<div style="display: flex; align-items: center; justify-content: center; height: 300px; background-color: #5ECE7B; color: #FFF; font-size: 2.5rem">{{index}}</div>`
}

storiesOf('Organisms/VcCarousel', module)
  .add('Default', () => ({
    components: {
      VcCarousel,
      SlidePlaceholder,
      VcCarouselItem,
    },
    template: `
    <div>
      <vc-carousel>
        <VcCarouselItem v-for="index in 6" :key="index">
          <SlidePlaceholder :index="index" />
        </VcCarouselItem>
      </vc-carousel>
    </div>
    `
  }))
