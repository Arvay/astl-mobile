import Vue from 'vue'
import 'lib-flexible'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import FastClick from 'fastclick'
import 'utils/permission'
import SvgIcon from 'components/SvgIcon'
import '@/icons' // icon
import '@/style/common.scss'
import { Lazyload, Popup, Image, ImagePreview, Overlay, Field, List, Icon, Notify } from 'vant'
import defaultSettings from '@/settings'
import vueEsign from 'vue-esign'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

if (process.env.NODE_ENV === 'production') {
  // mockXHR()
}

FastClick.attach(document.body)

// 手写板
Vue.use(vueEsign)
Vue.use(Popup)
Vue.use(Image)
Vue.use(ImagePreview)
Vue.use(Overlay)
Vue.use(Field)
Vue.use(List)
Vue.use(Icon)
Vue.use(Notify)

// options 为可选参数，无则不传
Vue.use(Lazyload)

Vue.component('svg-icon', SvgIcon)

if (process.env.NODE_ENV === 'development' && defaultSettings.vconsole) {
  // const VConsole = require('vconsole')
  // eslint-disable-next-line
  // const my_console = new VConsole()
}
let href = window.location.href
if (href.indexOf('localhost') < 0) {
  const VConsole = require('vconsole')
  const my_console = new VConsole()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
