import VcButton from './components/atoms/VcButton/VcButton.vue'
import VcInput from './components/atoms/VcInput/VcInput.vue'
import VcContainer from './components/atoms/VcContainer/VcContainer.vue'
import VcLink from './components/atoms/VcLink'
import { VcNav, VcNavItem } from './components/molecules/VcNav'
import VcSearch from './components/molecules/VcSearch'
import VcNavBar from './components/organisms/VcNavBar'
import { setCurrentVue, currentVue } from './runtimeContext'
import { assert } from './utils'
import {
  VcRow,
  VcCol,
} from './components/atoms'
import {
  VcBanner,
  VcTable,
  VcTableBody,
  VcTableHead,
  VcDropdown,
  VcDropdownMenu,
} from './components/molecules'
import {
  VcBannerGrid,
  VcCarousel,
  VcCarouselItem,
  VcProductCard,
} from './components/organisms'

const components = [
  VcButton,
  VcInput,
  VcContainer,
  VcRow,
  VcCol,
  VcLink,
  VcNav,
  VcNavItem,
  VcSearch,
  VcNavBar,
  VcBanner,
  VcBannerGrid,
  VcCarousel,
  VcCarouselItem,
  VcProductCard,
  VcTable,
  VcTableBody,
  VcTableHead,
  VcDropdown,
  VcDropdownMenu,
]

const Vuecom = {
  install(Vue: any, options: any = {}) {
    if (currentVue && currentVue === Vue) {
      if (process.env.NODE_ENV !== 'production') {
        assert(false, 'already installed. Vue.use(plugin) should be called only once')
      }
      return
    }
    ;(options.components || components).forEach((component: any) => {
      let componentName = component.name
      if (!componentName || (componentName && componentName === 'VueComponent')) {
        componentName = component.extendOptions.name
      }
      Vue.component(componentName, component)
    })
    setCurrentVue(Vue)
  },
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuecom)
}

export {
  VcButton,
  VcInput,
  VcContainer,
  VcRow,
  VcCol,
  VcLink,
  VcNav,
  VcNavItem,
  VcSearch,
  VcNavBar,
  VcBanner,
  VcBannerGrid,
  VcCarousel,
  VcCarouselItem,
  VcProductCard,
  VcTable,
  VcTableBody,
  VcTableHead,
  VcDropdown,
  VcDropdownMenu,
}

export default Vuecom
