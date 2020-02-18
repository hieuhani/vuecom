<template>
  <div class="vc-banner" :style="style">
    <div class="vc-banner__container">
      <slot name="subTitle" v-bind="{ subTitle }">
        <h3 v-if="subTitle" class="vc-banner__sub_title">
          {{ subTitle }}
        </h3>
      </slot>
      <slot name="title" v-bind="{ title }">
        <h1 v-if="title" class="vc-banner__title">
          {{ title }}
        </h1>
      </slot>
      <slot name="description" v-bind="{ description }">
        <p v-if="description" class="vc-banner__description">
          {{ description }}
        </p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export interface Props {
  title: string
  subTitle: string
  description: string
}

export default Vue.extend({
  name: 'VcBanner',
  props: {
    title: {
      type: String,
      default: '',
    } as PropOptions<string>,
    subTitle: {
      type: String,
      default: '',
    } as PropOptions<string>,
    description: {
      type: String,
      default: '',
    } as PropOptions<string>,
    backgroundColor: {
      type: String,
      default: '',
    } as PropOptions<string>,
    backgroundImage: {
      type: String,
      default: '',
    } as PropOptions<string>,
  },
  computed: {
    style() {
      return {
        '--background-image': `url(${this.backgroundImage})`,
        '--background-color': this.backgroundColor,
      }
    }
  },
})
</script>

<style lang="scss">
.vc-banner {
  color: #444;
  background-image: var(--background-image);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom left;
  display: flex;
  min-height: 300px;
  padding: 30px;
  border-radius: $border-radius;
}
</style>
