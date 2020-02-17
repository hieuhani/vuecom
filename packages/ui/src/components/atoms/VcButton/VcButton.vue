<template>
  <button :class="cssClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'VcButton',
  props: {
    variant: String,
    outline: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssClasses() {
      const modifierClasses = []
      if (this.variant) {
        const variantClass = this.outline ? `vc-button--outline-${this.variant}` : `vc-button--${this.variant}`
        modifierClasses.push(variantClass)
      }
      if (this.block) {
        modifierClasses.push('vc-button--block')
      }
      return [
        'vc-button',
        ...modifierClasses
      ]
    },
  },
})
</script>

<style lang="scss">
@import "./scss/mixins";
.vc-button {
  display: inline-block;
  background-color: transparent;
  border: $btn-border-width solid transparent;
  color: $body-color;
  text-align: center;
  white-space: $btn-white-space;

  &--block {
    width: 100%;
    display: block;
  }
  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-border-radius);

  @each $color, $value in $theme-colors {
    &--#{$color} {
      @include button-variant($value, $value);
    }
  }

  @each $color, $value in $theme-colors {
    &--outline-#{$color} {
      @include button-outline-variant($value);
    }
  }
}
</style>
