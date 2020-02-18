import { storiesOf } from "@storybook/vue"

import VcNavBar from './VcNavBar.vue'
import { VcNavItem, VcNav } from '../../molecules/VcNav'
import VcButton from '../../atoms/VcButton'

storiesOf("Organisms/VcNavigation", module)
  .add("Default", () => ({
    components: {
      VcNavBar,
      VcButton,
      VcNavItem,
      VcNav,
    },
    template: `
    <div>
      <vc-nav-bar>
        <div class="mr-auto">Vuefront</div>
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
        <div>
          <vc-button variant="primary" outline>Sign In</vc-button>
          <vc-button class="ml-2" variant="primary">Sign Up</vc-button>
        </div>
      </vc-nav-bar>
    </div>
    `
  }))
