import Vue from 'vue'
import { CombinedVueInstance } from 'vue/types/vue'
import { ApolloClientClientConfig } from 'vue-cli-plugin-apollo/graphql-client'
import VuecomGraphQL from './vuecom-graphql'
import VuecomDataSource from './index'


export interface ApolloClientConfig extends ApolloClientClientConfig<any> {
  httpEndpoint: string
  websocketsOnly?: boolean
}

export interface VuecomDataSourceOptions {

}


declare module 'vue/types/vue' {
  interface Vue {
    $vuecomDataSource: VuecomGraphQL<this>
  }
}

export default VuecomDataSource
