import path from 'path'
import { Module, Configuration } from '@nuxt/types'
import { ApolloClientConfig } from '../types'

export interface Options {
  apolloClientConfigs: {
    default: ApolloClientConfig | string
    [key: string]: ApolloClientConfig | string
  },
}

interface ModuleThis {
  options: Configuration,
  [key: string]: any,
}

const dataSourceModule: Module<Options> = function(this: ModuleThis, moduleOptions?: Options) {
  const options = Object.assign(
    this.options.vueFrontDataSource,
    moduleOptions,
  )
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template'),
    fileName: 'vuecommerce-datasource.js',
    options: {
      vueFrontDataSource: options,
    },
  })
}

declare module '@nuxt/types' {
  interface Configuration {
    vueFrontDataSource?: Options
  }
}

export default dataSourceModule
