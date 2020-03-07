<script lang="ts">
import Vue from "vue";

function broadcast(this: Vue, componentName: string, eventName: string, params: any) {
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      const args: any = [eventName].concat(params)
      child.$emit.apply(child, args);
    } else {
      const args: any = [componentName, eventName].concat([params])
      broadcast.apply(child, args);
    }
  });
}

function dispatch(this: Vue, componentName: string, eventName: string, params: any) {
  let parent = this.$parent || this.$root;
  let name = parent.$options.name;

  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;

    if (parent) {
      name = parent.$options.name;
    }
  }
  if (parent) {
    const args: any = [eventName].concat(params)
    parent.$emit.apply(parent, args);
  }
}

export default Vue.extend({
  methods: {
    dispatch(componentName: string, eventName: string, params: any) {
      dispatch.call(this, componentName, eventName, params);
    },
    broadcast(componentName: string, eventName: string, params: any) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
});
</script>
