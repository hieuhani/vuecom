<template>
  <vc-container class="vc-mix">
    <vc-row no-gutter>
      <vc-col>
        <div class="vc-mix__a">
          <slot name="a" />
        </div>
      </vc-col>
    </vc-row>
    <vc-row no-gutter>
      <vc-col md="9">
        <div class="vc-mix__b1">
          <slot name="b1" />
        </div>
      </vc-col>
      <vc-col md="3">
        <div class="vc-mix__b2-1">
          <slot name="b2-1" />
        </div>
        <div class="vc-mix__b2-2">
          <slot name="b2-2" />
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
  name: 'VcMix',
  components: {
    VcContainer,
    VcRow,
    VcCol,
  },
})
</script>
