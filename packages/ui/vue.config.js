module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/functions";
        @import "~@/styles/variables";
        @import "~@/styles/mixins";`
      },
    },
  },
}
