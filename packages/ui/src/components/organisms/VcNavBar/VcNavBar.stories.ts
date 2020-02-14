import { storiesOf } from "@storybook/vue";

import VcNavBar from "./VcNavBar.vue";

storiesOf("Organisms|VcNavigation", module)
  .add("Default", () => ({
    components: {
      VcNavBar,
    },
    template: `
    <div>
      <vc-nav-bar />
    </div>
    `
  }))
