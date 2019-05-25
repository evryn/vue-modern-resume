export default {
  install (Vue) {
    Vue.mixin({
      methods: {
        publicPath (path) {
          path = process.env.BASE_URL + path.replace(/^\/+/g, '')
          console.log(path)
          return path
        },
      },
    })
  },
}
