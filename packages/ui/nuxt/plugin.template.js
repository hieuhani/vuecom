import Vue from 'vue'

<% if (options.vuecom.components) { %>
import {
  Vuecom,
  <%= options.vuecom.components.join(',\n    ') %>
} from '@vuecom/ui';

Vue.use(Vuecom, {
  components: [
    <%= options.vuecom.components.join(',\n        ') %>
  ]
});
<% } else { %>
import Vuecom from '@vuecom/ui';
Vue.use(Vuecom, <%= JSON.stringify(options.vuecom ? options.vuecom : {}, undefined, 4) %>);
<% } %>
