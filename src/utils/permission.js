import router from '@/router'
import { Dialog } from 'vant'
import getPageTitle from '@/utils/get-page-title'
import http from '@/api/http'
import { Api } from '@/api/api'

const ua = window.navigator.userAgent.toLowerCase()
let hash = window.location.hash
const href = window.location.href
if (hash.indexOf('code=') > 0) {
  hash = hash.split('code=')[1]
  var wxCode = hash.split('&')[0]
}
var userId = 'wei.chen@magical-light.com'
router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  /* 判断是否是在企业微信中打开 */
  if (href.indexOf('localhost')) {
    main()
  } else {
    if ((ua.match(/MicroMessenger/i) === 'micromessenger') && (ua.match(/wxwork/i) === 'wxwork')) {
      main()
    } else {
      Dialog.alert({
        showConfirmButton: false,
        message: '请在安斯泰来企业微信中打开！'
      })
    }
  }

  function main () {
    if (!userId) {
      /* 如果没有用户信息 先去微信授权获取code */
      window.open('https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww1f0087e1de18858f&redirect_uri=astl.magical-light.com&response_type=code&scope=snsapi_base&state=Ghost#wechat_redirect')
      /* 有code后获取用户微信ID */
      if (wxCode) {
        http.get(Api.getUserId + wxCode).then(res => {
          userId = res.data.data
          localStorage.setItem('userId', userId)
          /* 有用户ID后获取 用户基础信息 */
          http.get(Api.getUserInfo + userId).then(res => {
            localStorage.setItem('userName', res.data.name)
            localStorage.setItem('userImg', res.data.avatar)
            next()
          })
        })
      }
    } else {
      next()
    }
  }
})
