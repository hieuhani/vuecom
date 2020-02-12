import { storiesOf } from "@storybook/vue";

import VcButton from "./VcButton.vue";

storiesOf("Atoms|VcButton", module)
  .add("Variant", () => ({
    components: {
      VcButton,
    },
    template: `
    <div>
      <div>
        <vc-button>Default</vc-button>
        <vc-button variant="primary">Primary</vc-button>
        <vc-button variant="secondary">Secondary</vc-button>
        <vc-button variant="info">Info</vc-button>
        <vc-button variant="warning">Warning</vc-button>
        <vc-button variant="danger">Danger</vc-button>
        <vc-button variant="light">Light</vc-button>
        <vc-button variant="dark">Dark</vc-button>
      </div>
      <div>
        <vc-button outline>Default</vc-button>
        <vc-button outline variant="primary">Primary</vc-button>
        <vc-button outline variant="secondary">Secondary</vc-button>
        <vc-button outline variant="info">Info</vc-button>
        <vc-button outline variant="warning">Warning</vc-button>
        <vc-button outline variant="danger">Danger</vc-button>
        <vc-button outline variant="light">Light</vc-button>
        <vc-button outline variant="dark">Dark</vc-button>
      </div>
    </div>
    `
  }))
