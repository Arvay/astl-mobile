import router from '@/router'
import { Dialog } from 'vant'
import getPageTitle from '@/utils/get-page-title'
import http from '@/api/http'
import store from '@/store'
import { Api } from '@/api/api'
// department  部分
const href = window.location.href
let hash = window.location.href
if (hash.indexOf('code=') > 0) {
  hash = hash.split('code=')[1]
  var wxCode = hash.split('&')[0]
}
var userId = ''
if (localStorage.getItem('userId')) {
  userId = localStorage.getItem('userId')
}
router.beforeEach(async (to, from, next) => {
  // if (IsPC()) {
  //   Dialog.alert({
  //     message: '请在指定企业微信中打开'
  //   })
  // }
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  /* 判断是否是在企业微信中打开 */
  if (href.indexOf(':8888') >= 0) {
    userId = 'wei.chen@magical-light.com'
    http.get(Api.getUserInfo + userId).then(res => {
      store.dispatch('setUserName', res.data.name)
      store.dispatch('setUserImg', res.data.avatar)
      store.dispatch('setUserEmail', res.data.email)
      store.dispatch('setUserId', res.data.userid)
      localStorage.setItem('userName', res.data.name)
      localStorage.setItem('userEmail', res.data.email)
      localStorage.setItem('department', res.data.department)
      localStorage.setItem('userImg', res.data.avatar)
      localStorage.setItem('userId', res.data.userid)
      localStorage.setItem('astlcode', res.data.astlcode)
      next()
    })
    main()
  } else {
    main()
  }

  store.dispatch('setUserId', localStorage.getItem('userId'))
  store.dispatch('setUserName', localStorage.getItem('userName'))
  store.dispatch('setUserEmail', localStorage.getItem('userEmail'))
  store.dispatch('setUserImg', localStorage.getItem('userImg'))

  function main () {
    if (userId !== '' && userId !== undefined && userId !== null && userId !== 'undefined') {
      next()
    } else {
      /* 如果没有用户信息 先去微信授权获取code */
      let hash = window.location.href
      if (hash.indexOf('code=') >= 0) {
        window.open('https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww1f0087e1de18858f&redirect_uri=astl.magical-light.com&response_type=code&scope=snsapi_base&state=Ghost#wechat_redirect')
        hash = hash.split('code=')[1]
        wxCode = hash.split('&')[0]
      }
      if (wxCode) {
        http.get(Api.getUserId + wxCode).then(res => {
          if (res.code === 0) {
            userId = res.data
            store.dispatch('setUserId', userId)
            localStorage.setItem('userId', userId)
            /* 有用户ID后获取 用户基础信息 */
            http.get(Api.getUserInfo + userId).then(res => {
              store.dispatch('setUserName', res.data.name)
              store.dispatch('setUserImg', res.data.avatar)
              store.dispatch('setUserEmail', res.data.email)
              localStorage.setItem('userName', res.data.name)
              localStorage.setItem('userEmail', res.data.email)
              localStorage.setItem('userImg', res.data.avatar)
              localStorage.setItem('department', res.data.department)
              localStorage.setItem('astlcode', res.data.astlcode)
              next()
            })
          } else {
            Dialog.alert({
              message: '请在指定企业微信中打开--' + 'code:' + res.code
            })
          }
        }).catch(error => {
          Dialog.alert({
            message: '请在指定企业微信中打开--' + 'code:' + error.code
          })
        })
      } else {
        next()
      }
    }
  }

  // function IsPC () {
  //   var userAgentInfo = navigator.userAgent
  //   var Agents = ['Android', 'iPhone',
  //     'SymbianOS', 'Windows Phone',
  //     'iPad', 'iPod']
  //   var flag = true
  //   for (var v = 0; v < Agents.length; v++) {
  //     if (userAgentInfo.indexOf(Agents[v]) > 0) {
  //       flag = false
  //       break
  //     }
  //   }
  //   return flag
  // }
})
