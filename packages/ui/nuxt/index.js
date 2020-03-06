const { resolve } = require('path')

module.exports = function VuecomNuxt(moduleOptions = {}) {
  const options = {
    ...this.options.vuecomUi,
    ...moduleOptions,
  }
  this.options.css = [].concat(this.options.css || [])
  if (options.vuecomUiScss) {
    if (Array.isArray(this.options.modules) && ~this.options.modules.indexOf('@nuxtjs/style-resources')) {
      if (!this.options.styleResources) {
        this.options.styleResources = {}
      }
      if (!this.options.styleResources.scss) {
        this.options.styleResources.scss = []
      }
      this.options.styleResources.scss.unshift(options.vuecomUiScss, '@vuecom/ui/src/styles/_variables.scss')
      this.options.css.unshift('@vuecom/ui/src/styles/css-reset.scss')
      this.options.css.unshift('@vuecom/ui/dist/vuecom-ui.scss')
      this.options.css.unshift('@vuecom/ui/dist/css-utilities.css')
    } else {
      throw new Error('@nuxtjs/style-resources must be available in order to use this function')
    }
  } else {
    this.options.css.unshift('@vuecom/ui/dist/vuecom-ui.css', '@vuecom/ui/dist/css-reset.css')
  }
  this.nuxt.hook('build:before', () => {
    // Register plugin, passing options to plugin template
    this.addPlugin({
      src: resolve(__dirname, 'plugin.template.js'),
      fileName: 'vuecom-ui.js',
      options: {
        vuecomUi: options,
      },
    })
  })
}
