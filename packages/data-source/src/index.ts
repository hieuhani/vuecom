import { VueConstructor } from 'vue'
import { VuefrontDataSourceOptions } from './types'
import VuefrontGraphQL from './vuefront-graphql'


export class VueFrontDataSource {
  static install = function install(Vue: VueConstructor, options: VuefrontDataSourceOptions)  {
    console.log(options)
    if (!Vue.prototype.$vueFrontDataSource) {
      Object.defineProperty(Vue.prototype, '$vueFrontDataSource', {
        get() {
          if (!this.$_vueFrontDataSource) {
            this.$_vueFrontDataSource = new VuefrontGraphQL(this)
          }
          return this.$_vueFrontDataSource
        },
      });
    }

  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueFrontDataSource)
}


export default VueFrontDataSource
