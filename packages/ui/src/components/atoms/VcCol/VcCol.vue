<script lang="ts">
import { mergeData } from 'vue-functional-data-merge'
import Vue, { RenderContext } from 'vue'
export default Vue.extend({
  name: 'VcCol',
  functional: true,
  props: {

  },
  render(h, { props, data, children }: RenderContext) {
    const classList: string[] = ['vc-col']
    return h(props.tag, mergeData(data, { class: classList }), children)
  },
})
</script>
