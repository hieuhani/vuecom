import { VueConstructor } from 'vue'
import { VuecomDataSourceOptions } from './types'
import VuecomGraphQL from './vuecom-graphql'


export class VuecomDataSource {
  static install = function install(Vue: VueConstructor, options: VuecomDataSourceOptions)  {
    if (!Vue.prototype.$vuecomDataSource) {
      Object.defineProperty(Vue.prototype, '$vuecomDataSource', {
        get() {
          if (!this.$_vuecomDataSource) {
            this.$_vuecomDataSource = new VuecomGraphQL(this)
          }
          return this.$_vuecomDataSource
        },
      });
    }

  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuecomDataSource)
}


export default VuecomDataSource
