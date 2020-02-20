import gql from 'graphql-tag'

export default class VuefrontGraphQL<V> {
  vm: V

  constructor(vm: V) {
    this.vm = vm
  }

  async queryShop() {
    const vm: any = this.vm
    return await vm.$apollo.query({
      query: gql`
      {
        shop {
          name
          description
          moneyFormat
          paymentSettings {
            acceptedCardBrands
            cardVaultUrl
            countryCode
            currencyCode
          }
          primaryDomain {
            host
            url
          }
          refundPolicy {
            id
            body
            handle
            title
            url
          }
          shipsToCountries
        }
      }
      `
    })
  }

  async queryCollections() {
    const vm: any = this.vm
    return await vm.$apollo.query({
      query: gql`
      {
        collections(first:10) {
          edges {
            node {
              id
              handle
              title
              image {
                transformedSrc(maxWidth: 500, maxHeight: 500)
              }
            }
          }
        }
      }
      `
    })
  }

  async queryProducts() {
    const vm: any = this.vm
    return await vm.$apollo.query({
      query: gql`
      {
        products(first:8) {
          edges {
            node {
              id
              handle
              title
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              images(first: 1) {
                edges {
                  node {
                    id
                    originalSrc
                  }
                }
              }
            }
          }
        }
      }
      `
    })
  }
}
