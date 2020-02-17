import Vue from 'vue'
import { CombinedVueInstance } from 'vue/types/vue'
import { ApolloClientClientConfig } from 'vue-cli-plugin-apollo/graphql-client'
import VuefrontGraphQL from './vuefront-graphql'
import VueFrontDataSource from './index'


export interface ApolloClientConfig extends ApolloClientClientConfig<any> {
  httpEndpoint: string
  websocketsOnly?: boolean
}

export interface VuefrontDataSourceOptions {

}


declare module 'vue/types/vue' {
  interface Vue {
    $vueFrontDataSource: VuefrontGraphQL<this>
  }
}

export default VueFrontDataSource
