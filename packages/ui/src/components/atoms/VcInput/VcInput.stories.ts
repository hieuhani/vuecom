import { storiesOf } from "@storybook/vue";

import VcInput from "./VcInput.vue";

storiesOf("Atoms|VcInput", module)
  .add("Default", () => ({
    components: {
      VcInput,
    },
    template: `
    <div>
      <vc-input label="Email" />
      <vc-input label="Password" type="password" />
    </div>
    `
  }))
