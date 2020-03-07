import { storiesOf } from '@storybook/vue'

import VcBricks from './VcBricks.vue'

storiesOf('Layous/VcBricks', module)
  .add('Default', () => ({
    components: {
      VcBricks,
    },
    template: `
    <div class="story-vc-bricks">
      <vc-bricks>
        <template #a1>
          <h3>A1</h3>
        </template>
        <template #a2>
          <h3>A2</h3>
        </template>
        <template #b1>
          <h3>B1</h3>
        </template>
        <template #b2>
          <h3>B2</h3>
        </template>
      </vc-bricks>
    </div>
    `
  }))
