<template>
  <div class="schedule_box wrapper" ref="wrapper">
      <div class="back" @click="back()">
        <img :src="BackImg" alt="">
      </div>
    <scroller>
    <img style="width: 100%" src="https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/%E5%90%88%E8%A7%84%E5%91%A8%E6%97%A5%E7%A8%8B%E9%95%BF%E5%9B%BE.png" alt="">
    </scroller>
  </div>
</template>

<script>
import HGZRC from '@/assets/HGZ_RC.png'
import BackImg from '@/assets/back_btn.png'
import wechat from 'weixin-js-sdk'
import http from '@/api/http'
import { Api } from '@/api/api'
export default {
  name: 'schedule',
  data () {
    return {
      discList: [],
      HGZRC: HGZRC,
      BackImg: BackImg
    }
  },
  mounted () {
    var that = this
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规周活动攻略', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGZ_RC.png', // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          that.watchAdd()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  },
  created: function () {
  },
  methods: {
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    back () {
      this.$router.push({ path: '/' })
    }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
  .wrapper{
  }
</style>
