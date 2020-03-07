import { storiesOf } from "@storybook/vue"

import VcTable from './VcTable.vue'
import VcTableHead from './VcTableHead.vue'
import VcTableBody from './VcTableBody.vue'

storiesOf("Molecules/VcTable", module)
  .add("Default", () => ({
    components: {
      VcTable,
      VcTableHead,
      VcTableBody,
    },
    data() {
      return {
        tableHeader: {
          cells: [{
            key: 'name',
            title: 'Name',
          }, {
            key: 'age',
            title: 'Age',
          }, {
            key: 'address',
            title: 'Address',
          }],
        },
        tableBody: {
          rows: [
            ['Hieu', 27, 'Hanoi'],
            ['Phuong', 25, 'Hue'],
            ['Huong', 22, 'Ho Chi Minh'],
          ],
        },
      }
    },
    template: `
    <div>
      <vc-table>
        <vc-table-head
          :cells="tableHeader.cells"
        />
        <vc-table-body
          :rows="tableBody.rows"
        />
      </vc-table>
    </div>
    `
  }))
