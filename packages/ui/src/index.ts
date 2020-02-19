import VcButton from './components/atoms/VcButton/VcButton.vue'
import VcInput from './components/atoms/VcInput/VcInput.vue'
import VcContainer from './components/atoms/VcContainer/VcContainer.vue'
import VcLink from './components/atoms/VcLink'
import { VcNav, VcNavItem } from './components/molecules/VcNav'
import VcSearch from './components/molecules/VcSearch'
import VcNavBar from './components/organisms/VcNavBar'

import { VcBanner } from './components/molecules'
import { VcBannerGrid } from './components/organisms'

const components = [
  VcButton,
  VcInput,
  VcContainer,
  VcLink,
  VcNav,
  VcNavItem,
  VcSearch,
  VcNavBar,
  VcBanner,
  VcBannerGrid,
]

const Vuecommerce = {
  install(Vue: any, options: any = {}) {
    ;(options.components || components).forEach((component: any) => {
      let componentName = component.name
      if (!componentName || (componentName && componentName === 'VueComponent')) {
        componentName = component.extendOptions.name
      }
      Vue.component(componentName, component)
    })
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuecommerce)
}

export {
  VcButton,
  VcInput,
  VcContainer,
  VcLink,
  VcNav,
  VcNavItem,
  VcSearch,
  VcNavBar,
  VcBanner,
  VcBannerGrid,
  Vuecommerce,
}

export default Vuecommerce
