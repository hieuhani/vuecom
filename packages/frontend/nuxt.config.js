
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'vuecom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@vuecom/ui/nuxt',
    '@vuecom/data-source/dist/nuxt',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: [
      '@vuecom/data-source',
      '@vuecom/ui',
    ],
  },
  vuecomDataSource: {
    apolloClientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.myshopify.com/api/2019-07/graphql.json',
        httpLinkOptions: {
          credentials: 'same-origin',
          headers: {
            'x-shopify-storefront-access-token': 'ecdc7f91ed0970e733268535c828fbbe'
          },
        },
      },
    },
  },
  vuecomUi: {
    vuecomUiScss: '~/assets/overrided_variables.scss',
  },
}
