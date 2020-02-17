export default class VuefrontGraphQL<V> {
  vm: V

  constructor(vm: V) {
    this.vm = vm
  }

  mtp() {
    return 'Say oh yeah from GraphQL'
  }
}
