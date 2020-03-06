import Vue from 'vue'
export * from './index'

export class Vuecom {
  static components: any[]
  static install(vue: typeof Vue, options: {}): void
}

export default Vuecom
