import { storiesOf } from "@storybook/vue";

import VcButton from "./VcButton.vue";

storiesOf("Atoms|VcButton", module)
  .add("Common", () => ({
    components: {
      VcButton,
    },
    template: '<vc-button>😀 😎 👍 💯</vc-button>'
  }))
