<template>
  <div class="vc-blog-layout">
    <vc-container>
      <div class="vc-blog-layout__header">
        <slot name="header" />
      </div>
      <vc-row no-gutter>
        <vc-col md="8">
          <div class="vc-blog-layout__main">
            <slot />
          </div>
        </vc-col>
        <vc-col md="4">
          <div class="vc-blog-layout__sidebar">
            <slot name="sidebar" />
          </div>
        </vc-col>
      </vc-row>
    </vc-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcContainer } from '../../atoms/VcContainer'
import { VcRow } from '../../atoms/VcRow'
import { VcCol } from '../../atoms/VcCol'

export default Vue.extend({
  name: 'VcBlogLayout',
  components: {
    VcContainer,
    VcRow,
    VcCol,
  },
})
</script>
