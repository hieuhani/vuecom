import { storiesOf } from '@storybook/vue'

import VcDropdown from './VcDropdown.vue'
import { VcDropdownMenu } from '../VcDropdownMenu'
import { VcDropdownItem } from '../VcDropdownItem'
import VcButton from '../../atoms/VcButton'

storiesOf('Molecules/VcDropdown', module)
  .add('Default', () => ({
    components: {
      VcButton,
      VcDropdown,
      VcDropdownMenu,
      VcDropdownItem,
    },
    template: `
    <div>
      <vc-dropdown placement="left-bottom">
        <vc-button variant="primary">
          Dropdown
        </vc-button>
        <vc-dropdown-menu>
          <vc-dropdown-item>
            Banana
          </vc-dropdown-item>
          <vc-dropdown-item>
            Orange
          </vc-dropdown-item>
          <vc-dropdown-item>
            Mango
          </vc-dropdown-item>
        </vc-dropdown-menu>
      </vc-dropdown>
    </div>
    `
  }))
