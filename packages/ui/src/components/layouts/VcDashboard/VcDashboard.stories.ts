import { storiesOf } from '@storybook/vue'

import VcDashboard from './VcDashboard.vue'

storiesOf('Layous/VcDashboard', module)
  .add('Default', () => ({
    components: {
      VcDashboard,
    },
    template: `
    <vc-dashboard>
      <template #navigation>
        <h3>Navigation</h3>
      </template>
      <template #sidebar>
        <h3>Sidebar</h3>
      </template>
      <template #content>
        <h3>Content</h3>
      </template>
    </vc-dashboard>
    `
  }))
