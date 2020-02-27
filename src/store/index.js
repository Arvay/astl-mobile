import Vue from 'vue'
import Vuex from 'vuex'
import user from './vv/modules/user'
import getters from './vv/getters'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
  state: {
    direction: 'forward' // 页面切换方向
  },
  getters,
  mutations: {
    // 更新页面切换方向
    updateDirection (state, direction) {
      state.direction = direction
    }
  },
  actions: {

  },
  modules: {
    user
  }
})
