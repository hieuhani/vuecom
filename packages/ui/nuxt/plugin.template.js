import Vue from 'vue'

<% if (options.vuecomUi.components) { %>
import {
  Vuecom,
  <%= options.vuecomUi.components.join(',\n    ') %>
} from '@vuecom/ui';

Vue.use(Vuecom, {
  components: [
    <%= options.vuecomUi.components.join(',\n        ') %>
  ]
});
<% } else { %>
import Vuecom from '@vuecom/ui';
Vue.use(Vuecom, <%= JSON.stringify(options.vuecomUi ? options.vuecomUi : {}, undefined, 4) %>);
<% } %>
