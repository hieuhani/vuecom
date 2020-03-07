<template>
  <a v-if="tag === 'a'" :href="href" :class="cssClasses">
    <slot />
  </a>
  <component v-else :is="tag" :to="to" :class="cssClasses">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VcLink',
  props: {
    to: {
      type: String,
    },
    href: {
      type: String,
    },
  },
  computed: {
    tag() {
      if (this.to) {
        return (this as any).$nuxt ? 'nuxt-link' : 'router-link'
      }
      return 'a'
    },
    cssClasses() {
      return ['vc-link']
    }
  },
})
</script>
