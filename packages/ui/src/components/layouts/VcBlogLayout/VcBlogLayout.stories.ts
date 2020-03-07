import { storiesOf } from '@storybook/vue'

import VcBlogLayout from './VcBlogLayout.vue'

storiesOf('Layous/VcBlogLayout', module)
  .add('Default', () => ({
    components: {
      VcBlogLayout,
    },
    template: `
    <div class="story-vc-blog-layout">
      <vc-blog-layout>
        <template #header>
          <h3>Header content</h3>
        </template>
        <template #sidebar>
          <h3>Sidebar content</h3>
        </template>
        <h3>Main world</h3>
      </vc-blog-layout>
    </div>
    `
  }))
