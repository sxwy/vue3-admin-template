module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: () => {
        return 1920
      }
    }
  }
}
