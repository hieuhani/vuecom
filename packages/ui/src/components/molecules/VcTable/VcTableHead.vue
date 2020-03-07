<template>
  <thead class="vc-table-head">
    <tr>
      <th v-for="cell in cells" :key="cell.key" :class="{ sortable: cell.sortable }">
        <div class="th-inner">
          {{ cell.title }}
          <span v-if="cell.sortable" class="sort-indicator">asc</span>
        </div>
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcTableHead',
  props: {
    cells: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.vc-table-head {
  th.sortable {
    cursor: pointer;
  }
  .th-inner {
    display: flex;
    align-items: center;
  }
  .sort-indicator {
    margin-left: .2rem;
    font-size: .8rem;
    line-height: .8rem;
    border: 1px solid #f8f9fa;
    background-color: #f8f9fa;
    padding: .1rem .2rem;
    font-weight: 400;
    border-radius: $border-radius;
  }
}
</style>
