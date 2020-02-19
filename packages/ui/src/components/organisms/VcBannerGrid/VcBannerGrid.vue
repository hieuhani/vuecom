<template>
  <div class="vc-banner-grid">
    <div class="vc-banner-grid__row">
      <div class="vc-banner-grid__col">
        <slot name="banner-A" />
      </div>
      <div class="vc-banner-grid__col vc-banner-grid__col--medium">
        <slot name="banner-B" />
      </div>
      <div class="vc-banner-grid__col">
        <div class="vc-banner-grid__row">
          <div class="vc-banner-grid__col">
            <slot name="banner-C" />
          </div>
        </div>
        <div class="vc-banner-grid__row">
          <div class="vc-banner-grid__col">
            <slot name="banner-D" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcBannerGrid',
})
</script>

<style lang="scss">
.vc-banner-grid {
  &__row {
    display: flex;
    & + & {
      margin-top: $spacer;
    }
  }
  &__col {
    flex-wrap: wrap;
    display: flex;
    flex: 1;
    & + & {
      margin-left: $spacer;
    }
    .sf-banner{
      flex: 1
    }
  }
}
</style>
