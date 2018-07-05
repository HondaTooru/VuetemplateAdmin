import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import 'vue-area-linkage/dist/index.css'
import '@/styles/index.scss' // global css
import VueAreaLinkage from 'vue-area-linkage'

import App from './App'
import router from './router'
import store from './store'

import './icons' // icon
import './permission' // permission control
import './mock'

Vue.use(VueAreaLinkage)
Vue.use(ElementUI, { size: 'small', locale })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
