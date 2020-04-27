<template>
  <div ref="areativity" class="areativity_box" id="areativity_id">
    <div></div>
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <img class="banner" :src="CYDSBanner" alt="">
      <div class="main">
        <ul class="tab">
          <li :style="backgroundDiv2" @click="goL()">
            群雄争霸
          </li>
          <li :style="backgroundDiv">
            人中豪杰
          </li>
        </ul>
        <div style="position: relative">
          <div style="height: 15px"></div>
<!--          <transition name="van-slide-left">-->
<!--            <TabLeft v-on:change="scrollTop" v-if="showLeft"></TabLeft>-->
<!--          </transition>-->
          <div style="position: absolute;top: 0;right: 0;width: 100%">
            <TabRight></TabRight>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import TabLeft from './base/tab-left'
import TabRight from './base/tab-right'
import store from '@/store'
import { mapGetters } from 'vuex'
import http from '@/api/http'
import { Api } from '@/api/api'
import CYDSBanner from '@/assets/CYDS_banner.png'
import BackImg from '@/assets/back_btn.png'
import CYHGCheckBtn from '@/assets/CYHG_check_btn.png'
import CYHGDefeatBtn from '@/assets/CYHG_defeat_btn.png'
import wechat from 'weixin-js-sdk'
export default {
  name: 'creativity2',
  computed: {
    ...mapGetters([
      'tabIndex'
    ])
  },
  data () {
    return {
      scrollTop: 0,
      showLeft: true,
      CYDSBanner: CYDSBanner,
      backImg: BackImg,
      backgroundDiv: {
        backgroundImage: 'url(' + CYHGCheckBtn + ')'
      },
      backgroundDiv2: {
        backgroundImage: 'url(' + CYHGDefeatBtn + ')'
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      var bady = document.getElementById('areativity_id')
      bady.onscroll = () => {
        this.scrollTop = bady.scrollTop
      }
    })
    var that = this
    this.showLeft = this.tabIndex
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规创意大赛列表', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/CYDS_banner.png', // 分享图标
        success: function () {
          that.watchAdd()
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  },
  created: function () {
  },
  activated () {
    this.$refs.myscroller.finishInfinite(true)
    this.$refs.areativity.scrollTop = this.scrollTop
  },
  deactivated () {
  },
  methods: {
    goL () {
      this.$router.push({ path: '/creativity' })
    },
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
    setTabIndex (val) {
      this.showLeft = val
      store.dispatch('setTabIndex', val)
    }
  },
  components: {
    TabRight
  }
}
</script>
<style scoped lang="scss">
  .main {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .tab {
    display: flex;
    justify-content: space-between;
    li {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 36px;
      text-align: center;
      width: 170px;
      background-size: 100% 100%;
    }
  }

  .banner {
    width: 100%;
  }
</style>
