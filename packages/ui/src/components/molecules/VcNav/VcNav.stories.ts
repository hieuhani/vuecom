import { storiesOf } from '@storybook/vue'

import VcNav from './VcNav.vue'
import VcNavItem from './VcNavItem.vue'

storiesOf('Molecules/VcNav', module)
  .add('Default', () => ({
    components: {
      VcNav,
      VcNavItem,
    },
    template: `
    <div>
      <vc-nav>
        <vc-nav-item href="#orange">
          Orange
        </vc-nav-item>
        <vc-nav-item href="#banana">
          Banana
        </vc-nav-item>
        <vc-nav-item href="#watermelon">
          Watermelon
        </vc-nav-item>
      </vc-nav>

      <vc-nav vertical>
        <vc-nav-item href="#orange">
          Orange
        </vc-nav-item>
        <vc-nav-item href="#banana">
          Banana
        </vc-nav-item>
        <vc-nav-item href="#watermelon">
          Watermelon
        </vc-nav-item>
      </vc-nav>
    </div>
    `
  }))
