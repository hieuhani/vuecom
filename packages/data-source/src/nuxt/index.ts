import path from 'path'
import { VueApolloComponentOptions } from 'vue-apollo/types/options'
import { Module, Configuration } from '@nuxt/types'
import { ApolloClientConfig } from '../types'

export interface Options {
  apolloClientConfigs: {
    default: ApolloClientConfig | string
    [key: string]: ApolloClientConfig | string
  },
  defaultOptions?: VueApolloComponentOptions<any>,
}

interface ModuleThis {
  options: Configuration,
  [key: string]: any,
}

const dataSourceModule: Module<Options> = function(this: ModuleThis, moduleOptions?: Options) {
  if (!this.options.vueFrontDataSource && !moduleOptions) {
    throw new Error('[Apollo module] No apolloClientConfigs found in apollo configuration')
  }
  const options: Options = Object.assign(
    this.options.vueFrontDataSource,
    moduleOptions,
  )!

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template'),
    fileName: 'vuecommerce-datasource.js',
    options,
  })
}

declare module '@nuxt/types' {
  interface Configuration {
    vueFrontDataSource?: Options
  }
}

export default dataSourceModule
