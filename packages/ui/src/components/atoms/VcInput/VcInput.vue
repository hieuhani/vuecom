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

<style lang="scss" src="./VcInput.scss" />
