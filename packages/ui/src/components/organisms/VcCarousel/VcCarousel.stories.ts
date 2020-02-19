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
      VcCarouselItem,
      SlidePlaceholder,
    },
    template: `
    <div>
      <vc-carousel>
        <vc-carousel-item v-for="index in 6" :key="index">
          <SlidePlaceholder :index="index" />
        </vc-carousel-item>
      </vc-carousel>
    </div>
    `
  }))
