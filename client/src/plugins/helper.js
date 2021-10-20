export default {
  install (Vue) {
    Vue.mixin({
      methods: {
        /**
         * Respect publicPath in vue.config.js if given
         * @param path Any relative path
         * @returns {string} Public relative path
         */
        publicPath (path) {
          return process.env.BASE_URL + path.replace(/^\/+/g, '')
        },
      },
    })
  },
}
