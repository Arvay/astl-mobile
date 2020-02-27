var host = 'http://47.94.146.245:11010/'
const href = window.location.href
if (href.indexOf('localhost') > 0 || href.indexOf(':8888') > 0) {
  host = '' // 如果本地调试
}
export var Api = {
  getUserId: `${host}userinfo/code/get/`, // 通过code获取userid
  getUserInfo: `${host}userinfo/get/`, // 通过用户信息
  getActivityList: `${host}activity/list/`, // 获取活动列表
  getActivityDetail: `${host}activity/get/` // 获取活动详情
}
