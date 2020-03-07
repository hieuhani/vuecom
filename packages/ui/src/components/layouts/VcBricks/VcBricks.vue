<template>
  <vc-container class="vc-bricks">
    <vc-row no-gutter>
      <vc-col md="9">
        <div class="vc-bricks__a1">
          <slot name="a1" />
        </div>
      </vc-col>
      <vc-col md="3">
        <div class="vc-bricks__a2">
          <slot name="a2" />
        </div>
      </vc-col>
    </vc-row>
    <vc-row no-gutter>
      <vc-col md="3">
        <div class="vc-bricks__b1">
          <slot name="b1" />
        </div>
      </vc-col>
      <vc-col md="9">
        <div class="vc-bricks__b2">
          <slot name="b2" />
        </div>
      </vc-col>
    </vc-row>
  </vc-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcContainer } from '../../atoms/VcContainer'
import { VcRow } from '../../atoms/VcRow'
import { VcCol } from '../../atoms/VcCol'

export default Vue.extend({
  name: 'VcBricks',
  components: {
    VcContainer,
    VcRow,
    VcCol,
  },
})
</script>
