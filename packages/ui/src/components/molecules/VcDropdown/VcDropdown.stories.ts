import { storiesOf } from '@storybook/vue'

import VcDropdown from './VcDropdown.vue'
import { VcDropdownMenu } from '../VcDropdownMenu'
import VcButton from '../../atoms/VcButton'

storiesOf('Molecules/VcDropdown', module)
  .add('Default', () => ({
    components: {
      VcDropdown,
      VcButton,
      VcDropdownMenu,
    },
    template: `
    <div>
      <vc-dropdown placement="left-bottom">
        <vc-button variant="primary">
          Dropdown
        </vc-button>
        <vc-dropdown-menu>
          Content in dropdown hahaha
        </vc-dropdown-menu>
      </vc-dropdown>
    </div>
    `
  }))
