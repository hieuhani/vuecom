<template>
  <div class="vc-input">
    <label :for="name" v-if="label" class="vc-input__label">{{ label }}</label>
    <input
      :id="name"
      v-bind="$attrs"
      :type="type"
      class="vc-input__input"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VcInput',
  props: {
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
})
</script>

<style lang="scss">
.vc-input {
  margin-bottom: 1rem;
  &__label {
    font-weight: bold;
  }
  &__input {
    display: block;
    width: 100%;
    padding: $input-padding-y $input-padding-x;
    @include font-size($input-font-size);
    font-weight: $input-font-weight;
    line-height: $input-line-height;
    color: $input-color;
    background-color: $input-bg;
    border: $input-border-width solid $input-border-color;

    // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.
    @include border-radius($input-border-radius, 0);
    &:focus {
      color: $input-focus-color;
      background-color: $input-focus-bg;
      border-color: $input-focus-border-color;
      outline: 0;
    }
  }
}
</style>
