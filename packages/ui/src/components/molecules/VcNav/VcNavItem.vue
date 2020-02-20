<template>
  <li class="vc-nav-item">
    <vc-link :to="to" :href="href">
      <slot />
    </vc-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import { VcLink } from '../../atoms/VcLink'

export default Vue.extend({
  name: 'VcNavItem',
  components: {
    VcLink,
  },
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
    },
    href: {
      type: String,
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
