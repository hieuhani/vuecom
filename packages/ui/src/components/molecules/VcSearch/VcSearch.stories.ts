import { storiesOf } from "@storybook/vue";

import VcSearch from "./VcSearch.vue";

storiesOf("Molecules|VcSearch", module)
  .add("Default", () => ({
    components: {
      VcSearch,
    },
    template: `
    <div>
      <vc-search />
    </div>
    `
  }))
