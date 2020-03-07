import { storiesOf } from '@storybook/vue'

import VcSingleColumn from './VcSingleColumn.vue'

storiesOf('Layous/VcSingleColumn', module)
  .add('Default', () => ({
    components: {
      VcSingleColumn,
    },
    template: `
    <div class="story-vc-single-column">
      <vc-single-column>
        <template #header>
          <h3>Header content</h3>
        </template>
        <h3>Main world</h3>
        <template #footer>
          <h3>Footer content</h3>
        </template>
      </vc-single-column>
    </div>
    `
  }))
