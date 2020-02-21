<script lang="ts">
import { mergeData } from 'vue-functional-data-merge'
import Vue, { RenderContext } from 'vue'
export default Vue.extend({
  name: 'VcCol',
  functional: true,
  props: {
    sm: {
      type: [Number, String],
      default: null,
    },
    md: {
      type: [Number, String],
      default: null,
    },
    lg: {
      type: [Number, String],
      default: null,
    },
    xl: {
      type: [Number, String],
      default: null,
    },
  },
  render(h, { props, data, children }: RenderContext) {
    const classList: string[] = ['vc-col']
    if (props.sm) {
      classList.push(`vc-col-${props.sm}`)
    }
    if (props.md) {
      classList.push(`vc-col-${props.md}`)
    }
    if (props.lg) {
      classList.push(`vc-col-${props.lg}`)
    }
    if (props.xl) {
      classList.push(`vc-col-${props.xl}`)
    }
    return h('div', mergeData(data, { class: classList }), children)
  },
})
</script>

<style lang="scss">
@import '../../../styles/mixins/breakpoints';
@import './scss/mixins';
@include make-grid-columns();
</style>
