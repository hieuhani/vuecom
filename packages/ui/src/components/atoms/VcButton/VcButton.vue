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

<style lang="scss" src="./VcButton.scss" />
