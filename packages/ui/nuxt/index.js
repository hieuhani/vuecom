const { resolve } = require('path')

module.exports = function VueCommerceNuxt(moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.vuecommerce,
      ...moduleOptions,
    }

    this.options.css = [].concat(this.options.css || [])
    this.options.css.unshift('@vuecommerce/ui/dist/vuecommerce-ui.css')

    // this.options.build.transpile = [].concat(this.options.build.transpile || [])
    // this.options.build.transpile.push('@vuecommerce/ui')

    // Register plugin, passing options to plugin template
    this.addPlugin({
      src: resolve(__dirname, 'plugin.template.js'),
      fileName: 'vuecommerce-ui.js',
      options: {
        vuecommerce: options,
      },
    })
  })
}
