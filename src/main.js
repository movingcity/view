import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/element-ui.css'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// https://juejin.im/post/6844903667821182989
// 导入配置好的国际化语言包
import i18n from './lang' // Internationalization

import '@/icons' // icon

// import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const {
//     mockXHR
//   } = require('../mock')
//   mockXHR()
// }

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)// 在注册Element时设置i18n的处理方法
})

import Table from 'buefy'
import 'buefy/dist/buefy.css'
// internal icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Table, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
