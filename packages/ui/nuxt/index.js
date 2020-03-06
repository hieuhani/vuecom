const { resolve } = require('path')

module.exports = function VuecomNuxt(moduleOptions = {}) {
  this.nuxt.hook('build:before', () => {
    const options = {
      ...this.options.vuecom,
      ...moduleOptions,
    }

    this.options.css = [].concat(this.options.css || [])
    this.options.css.unshift('@vuecom/ui/dist/vuecom-ui.css')

    // this.options.build.transpile = [].concat(this.options.build.transpile || [])
    // this.options.build.transpile.push('@vuecom/ui')

    // Register plugin, passing options to plugin template
    this.addPlugin({
      src: resolve(__dirname, 'plugin.template.js'),
      fileName: 'vuecom-ui.js',
      options: {
        vuecom: options,
      },
    })
  })
}
