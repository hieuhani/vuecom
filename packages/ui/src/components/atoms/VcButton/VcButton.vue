<template>
  <button :class="cssClasses">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: 'VcButton',
  props: {
    variant: String,
    outline: {
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
