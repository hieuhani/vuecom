import { storiesOf } from '@storybook/vue'

import VcMix from './VcMix.vue'

storiesOf('Layous/VcMix', module)
  .add('Default', () => ({
    components: {
      VcMix,
    },
    template: `
    <div class="story-vc-mix">
      <vc-mix>
        <template #a>
          <h3>A</h3>
        </template>
        <template #b1>
          <h3>B1</h3>
        </template>
        <template #b2-1>
          <h3>B2-1</h3>
        </template>
        <template #b2-2>
          <h3>B2-2</h3>
        </template>
      </vc-mix>
    </div>
    `
  }))
