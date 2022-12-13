module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/_variables.scss";`,
        // myAdditionalData: `@import "@/assets/sass/_mediaQuery.scss";`,
      },
    }
  }
}
