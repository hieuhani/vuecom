<template>
  <tbody>
    <tr
      v-for="(cells, rIndex) in rows"
      :key="rIndex"
    >
      <td v-for="(cell, cIndex) in cells" :key="cIndex">
        {{ cell }}
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcTableBody',
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
})
</script>
