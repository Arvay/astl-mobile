var host = 'http://47.94.146.245:11010/'
const href = window.location.href
if (href.indexOf('localhost') > 0 || href.indexOf(':8888') > 0) {
  host = '' // 如果本地调试
}
export var Api = {
  getUserId: `${host}userinfo/code/get/`, // 通过code获取userid
  getUserInfo: `${host}userinfo/get/`, // 通过用户信息
  getActivityList: `${host}activity/list/`, // 获取活动列表
  getCommentList: `${host}comment/list/`, // 评论列表
  saveComment: `${host}comment/save`, // 评论
  commentLike: `${host}like/comment`, // 评论点赞
  activityLike: `${host}like/activity`, // 活动点赞
  vote: `${host}vote/vote`, // 投票
  saveSignon: `${host}signon/save`, // 签到
  getSignon: `${host}signon/get/`, // 获取签到
  uploadFile: `${host}upload/file`, // 附件上传
  saveActivity: `${host}activity/save`, //  创建活动
  game: `${host}game/point/`, // 游戏积分
  pointRank: `${host}point/rank`, // 所有积分排行榜
  userPointRank: `${host}point/rank/`, // 用户自己的排名
  rankDay: `${host}point/rank/day`, //   日排行
  getUserPromise: `/activity/type6`, // 获取签署信息
  getActivityDetail: `${host}activity/get/` // 获取活动详情
}
