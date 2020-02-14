<template>
  <a v-if="tag === 'a'" :href="href" :class="cssClasses">
    <slot />
  </a>
  <component v-else :is="tag" :to="to">
    <slot />
  </component>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
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
        return this.$nuxt ? 'nuxt-link' : 'router-link'
      }
      return 'a'
    },
    cssClasses() {
      return ['vc-link']
    }
  },
})
</script>
