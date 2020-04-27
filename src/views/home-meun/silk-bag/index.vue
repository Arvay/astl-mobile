<template>
  <div class="silkbag_box">
      <div class="back" @click="back()">
        <img :src="backImg" alt="">
      </div>
    <scroller>
      <div class="banner">
        <img :src="HGJNBanner" alt="">
      </div>
      <div class="content">
        <ul>
          <li v-for="item in dataList" :key="item.id" @click="goDetail(item.id)">
            <div class="time">{{item.content}}</div>
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
          </li>
        </ul>
      </div>
    </scroller>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import HGJNBanner from '@/assets/HGJN_banner.png'
import http from '@/api/http'
import { Api } from '@/api/api'
import { mapGetters } from 'vuex'
import wechat from 'weixin-js-sdk'
export default {
  name: 'giftbag',
  data () {
    return {
      dataList: '',
      HGJNBanner: HGJNBanner,
      backImg: BackImg
    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  mounted () {
    var that = this
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规锦囊列表', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGJN_banner.png', // 分享图标
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
    this.getData()
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
    },
    getData () {
      let user = localStorage.getItem('userId2')
      http.get(Api.getActivityList + `5/${user}`).then(res => {
        this.dataList = res.data.reverse()
      })
    },
    goDetail (id) {
      this.$router.push({ path: '/giftBagDetail/' + id })
    }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
  .silkbag_box {
  }
  .content {
    li {
      margin-bottom: 10px;
      text-align: center;
      .time {
        font-size: 14px;
        color: #B0947C;
        margin-bottom: 15px;
      }
      img {
        width: 100%;
        height: 194px;
        border-radius: 8px;
        margin-bottom: 7px;
      }
      .title {
        text-align: left;
        font-size: 16px;
        color: #5D422B;
        line-height: 28px;
      }
    }
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
