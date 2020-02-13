import VcButton from './components/atoms/VcButton/VcButton.vue'
import VcInput from './components/atoms/VcInput/VcInput.vue'
import VcContainer from './components/atoms/VcContainer/VcContainer.vue'

const components = [
  VcButton,
  VcInput,
  VcContainer,
]

const Vuecommerce = {
  install(Vue: any, options: any = {}) {
    ;(options.components || components).forEach((component: any) => {
      Vue.component(component.extendOptions.name, component)
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
  Vuecommerce,
}

export default Vuecommerce
