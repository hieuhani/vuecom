import Vue from 'vue'

<% if (options.vuecommerce.components) { %>
import {
  Vuecommerce,
  <%= options.vuecommerce.components.join(',\n    ') %>
} from '@vuecommerce/ui';

Vue.use(Vuecommerce, {
  components: [
    <%= options.vuecommerce.components.join(',\n        ') %>
  ]
});
<% } else { %>
import Vuecommerce from '@vuecommerce/ui';
Vue.use(Vuecommerce, <%= JSON.stringify(options.vuecommerce ? options.vuecommerce : {}, undefined, 4) %>);
<% } %>
