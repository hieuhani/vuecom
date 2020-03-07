<template>
  <div class="vc-dropdown-menu" v-show="visible">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import PopupProviderMixin from "../../../providers/PopupProviderMixin.vue";

export default Vue.extend({
  name: "VcDropdownMenu",
  inject: ["dropdown"],
  mixins: [(PopupProviderMixin as any)],
  created() {
    this.$on("updatePopper", () => {
      if ((this as any).visible) (this as any).updatePopper();
    });

    this.$on("visibility-change", (value: boolean) => {
      (this as any).visible = value;
    });
  },
  mounted() {
    (this as any).popupElement = this.$el;
    (this as any).referenceElement = (this as any).dropdown.$el;
    (this as any).currentPlacement = (this as any).dropdown.placement;
  }
});
</script>

<style lang="scss">
@import "./VcDropdownMenu";
</style>
