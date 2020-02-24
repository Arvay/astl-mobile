import router from '@/router'
import getPageTitle from '@/utils/get-page-title'

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = { 'phoneNumber': '17600000000', 'password': '123456' }

  if (hasToken) {
    if (to.path === '/login') {
      // 已经登录，跳转到首页
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})
