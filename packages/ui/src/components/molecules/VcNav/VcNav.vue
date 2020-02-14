<template>
  <ul :class="cssClasses">
    <slot />
  </ul>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'VcNav',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const modifierClasses = []
      if (this.vertical) {
        modifierClasses.push('vc-nav--vertical')
      }
      return [
        'vc-nav',
        ...modifierClasses
      ]
    },
  },
})
</script>

<style lang="scss">
.vc-nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  .vc-link {
    display: block;
    padding: $nav-link-padding-y $nav-link-padding-x;
  }

  &--vertical {
    flex-direction: column;
  }
}
</style>
