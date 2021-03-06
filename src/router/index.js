import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home.vue'
import NoteBook from 'views/home-meun/notebook/notebook'
import Creativity from 'views/home-meun/creativity/index'
import Creativity2 from 'views/home-meun/creativity/base/tab2-right'
import CreativityDetails from 'views/home-meun/creativity/base/details'
import Spokesperson from 'views/home-meun/spokesperson/index'
import Spokesperson2 from 'views/home-meun/spokesperson/index2'
import Lookback from 'views/home-meun/look-back/index'
import Ranking from 'views/home-meun/ranking/index'
import SilkBag from 'views/home-meun/silk-bag/index'
import SilkBagDetail from 'views/home-meun/silk-bag/base/detail'
import Schedule from 'views/home-meun/schedule/index'
import Checkpdf from 'views/home-meun/notebook/base/pdf-view'
import Game from 'views/home-meun/game/index'
import store from '@/store'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/notebook',
    name: '合规手册',
    component: NoteBook,
    meta: {
      title: '合规手册',
      keepAlive: false
    }
  },
  {
    path: '/creativity',
    name: 'bbbbbbb',
    component: Creativity,
    meta: {
      title: '合规创意大赛'
    }
  },
  {
    path: '/creativity2',
    name: 'creativity2',
    component: Creativity2,
    meta: {
      title: '合规创意大赛',
      keepAlive: false
    }
  },
  {
    path: '/creativityDetails/:type/:id/:type2?',
    name: 'creativityDetails',
    component: CreativityDetails,
    meta: {
      title: '合规创意大赛-详情'
    }
  },
  {
    path: '/spokesperson',
    name: '合规代言人',
    component: Spokesperson,
    meta: {
      title: '合规代言人'
    }
  },
  {
    path: '/spokesperson2',
    name: 'spokesperson2',
    component: Spokesperson2,
    meta: {
      title: '合规云课堂'
    }
  },
  {
    path: '/lookback',
    name: '精彩回顾',
    component: Lookback,
    meta: {
      title: '精彩回顾'
    }
  },
  {
    path: '/giftbag',
    name: 'giftbag',
    component: SilkBag,
    meta: {
      title: '合规锦囊'
    }
  },
  {
    path: '/giftBagDetail/:id',
    name: 'SilkBagDetail',
    component: SilkBagDetail,
    meta: {
      title: '合规锦囊-详情'
    }
  },
  {
    path: '/schedule',
    name: '2020合规周',
    component: Schedule,
    meta: {
      title: '2020合规周'
    }
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
    meta: {
      title: '积分排名'
    }
  },
  {
    path: '/checkpdf/:type',
    name: '合规手册',
    component: Checkpdf,
    meta: {
      title: '合规手册'
    }
  },
  {
    path: '/game',
    name: '不服来战，诺行挑战',
    component: Game,
    meta: {
      title: '不服来战，诺行挑战'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ 'views/404.vue'),
    meta: {
      title: '404',
      keepAlive: true
    }
  }
]

const routerContext = require.context('./', true, /\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的 index.js 、不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容 import export 和 require module.export 两种规范
   */
  routes = routes.concat(routerModule.default || routerModule)
})

routes = routes.concat({
  path: '*',
  redirect: '/404'
})

const createRouter = () => new Router({
  // mode: 'history', // require service support
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const myRouter = createRouter()

// const myRouter = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

myRouter.beforeEach((to, from, next) => {
  if (to.params.direction) {
    store.commit('updateDirection', to.params.direction)
  } else {
    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)
    // 判断并记录跳转页面是否访问过，以此判断跳转过渡方式
    if (toIndex) {
      if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
        store.commit('updateDirection', 'forward')
      } else {
        store.commit('updateDirection', 'back')
      }
    } else {
      ++historyCount
      history.setItem('count', historyCount)
      to.path !== '/' && history.setItem(to.path, historyCount)
      store.commit('updateDirection', 'forward')
    }
  }
  next()
})

export function resetRouter () {
  myRouter.replace('/login')
}

export default myRouter
