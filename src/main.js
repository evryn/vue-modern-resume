import Vue from 'vue'
import './plugins/vuetify'
import helper from '@/plugins/helper'
import '@/components'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(helper)

new Vue({ render: (h) => h(App) }).$mount('#app')
