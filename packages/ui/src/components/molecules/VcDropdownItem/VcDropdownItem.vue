<template>
  <div
    class="vc-dropdown-item"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import mixins from 'vue-typed-mixins'
import EmitProviderMixin from '../../../providers/EmitProviderMixin.vue'
import { VcLink } from '../../atoms/VcLink'

export default mixins(EmitProviderMixin).extend({
  name: 'VcDropdownItem',
  extends: VcLink,
  methods: {
    handleClick() {
      this.dispatch('VcDropdown', 'item-click', this);
    },
  },
})
</script>

<style lang="scss">
.vc-dropdown-item {
  display: block;
  width: 100%;
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  padding: .5rem 1rem;

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>
