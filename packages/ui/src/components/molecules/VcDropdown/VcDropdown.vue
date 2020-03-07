<template>
  <div class="vc-dropdown" v-bind="$attrs" v-click-outside="hide">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { VNode } from "vue";
import { querySelector } from "../../../helpers/query";
import EmitProviderMixin from "../../../providers/EmitProviderMixin.vue";
import PopupControlsProviderMixin from "../../../providers/PopupControlsProviderMixin.vue";
import ClickOutside from "../../../directives/click-outside";
import { uid } from "../../../helpers/uid";

interface State {
  id: string;
  triggerElement: Node | undefined;
  popupElement: Node | undefined;
  menu: VNode | null;
  basename: string;
}

export default Vue.extend({
  name: "VcDropdown",
  provide() {
    return {
      dropdown: this
    };
  },
  mixins: [EmitProviderMixin, PopupControlsProviderMixin],
  directives: {
    ClickOutside
  },
  props: {
    placement: {
      type: String,
      default: "bottom",
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
  },
  data(): State {
    const basename = "dropdown";
    return {
      id: this.$attrs.id || uid(basename + "-menu"),
      menu: null,
      triggerElement: undefined,
      popupElement: undefined,
      basename
    };
  },
  mounted() {
    this.$on("init", (this as any).initElements);
    this.$on('item-click', (this as any).onItemClick);
  },
  methods: {
    initElements() {
      const slots = this.$slots.default || [];
      if (slots.length < 2) {
        throw new Error(`VcDropdown component requires two child elements.
          The first one will be used as a trigger. The second one should be a VcDropdownMenu component.`);
      }
      (this as any).menu = querySelector(slots, "VcDropdownMenu");

      if (!(this as any).menu) {
        throw new Error("Could not find child VcDropdownMenu in VcDropdown.");
      }

      (this as any).triggerElement = slots[0].elm;
      (this as any).popupElement = (this as any).menu.elm;
    },
    onItemClick() {
      if (this.hideOnClick) {
        (this as any).visible = false;
      }
    },
  },
  watch: {
    visible(value) {
      (this as any).broadcast("VcDropdownMenu", "visibility-change", value);
      this.$emit("change", value);
    }
  }
});
</script>

<style lang="scss">
@import "./VcDropdown";
</style>
