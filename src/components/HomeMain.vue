<template>
  <div class="home-box">
<!--    <back @change="back"/>-->
    <div @click="openLock" class="openLock"></div>
    <div class="banner">
      <img src="../assets/HOME_banner.png" alt="">
    </div>
<!--    <div v-show="isClear !== 1" @click="clearll" class="clear">-->
<!--      <van-button plain type="info">清除缓存</van-button>-->
<!--    </div>-->
    <div class="url_box">
      <ul class="menu" style="margin-top: 0">
        <li>
          <!--2020合规周-->
          <img @click="goMeun('/schedule')" src="../assets/HOME_HGZ_icon.png" alt="">
        </li>
        <li>
          <!--合规锦囊-->
          <img @click="goMeun('/giftbag')" src="../assets/HOME_HGJN_icon.png" alt="">
        </li>
        <li>
          <!--闯关答题-->
          <img @click="goMeun('game')" src="../assets/HOME_CGDT_icon.png" alt="">
        </li>
      </ul>
      <ul class="menu">
        <li>
          <!--合规代言人-->
          <img @click="goMeun('/spokesperson')" src="../assets/HOME_HGDYR_icon.png" alt="">
        </li>
        <li>
          <!--中间log-->
          <img @click="goMeun('/lookback')" style="width: 108px" src="../assets/logo.png" alt="">
        </li>
        <li>
          <!--创意大赛-->
          <img @click="goMeun('/creativity')" src="../assets/HOME_HGCYS_icon.png" alt="">
        </li>
      </ul>
      <ul class="menu">
        <li>
          <!--合规云课堂-->
          <img @click="goMeun('/spokesperson2')" src="../assets/HOME_HGYKT_icon.png" alt="">
        </li>
        <li>
          <!--合规手册-->
          <img v-show="!isLockUp" @click="goMeun('/notebook')" src="../assets/HOME_HGSC_icon.png" alt="">
          <img v-show="isLockUp" src="https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HOME_HGSC_icon_unuse%202.png" alt="">
        </li>
        <li>
          <!--积分排名-->
          <img @click="goMeun('/ranking')" src="../assets/HOME_JFPM_icon.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import http from '@/api/http'
import { Api } from '@/api/api'
import { Toast } from 'vant'
import HOMEBanner from '../assets/HOME_banner.png'
import wechat from 'weixin-js-sdk'
import Back from './back/Back'

export default {
  name: 'FooterTabbar',
  data () {
    return {
      userId: localStorage.getItem('userId2'),
      userName: localStorage.getItem('userName'),
      userImg: localStorage.getItem('userImg'),
      isClear: localStorage.getItem('clearIs'),
      clickNum: 0,
      isLockUp: true,
      time19: 1584678600000,
      HOMEBanner: HOMEBanner
    }
  },
  mounted () {
    var that = this
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规周-首页', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HOME_banner.png', // 分享图标
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
  activated () {
    let time = new Date().getTime()
    if (time > this.time19) {
      this.isLockUp = false
    }
  },
  created () {
  },
  methods: {
    back () {
      window.open('http://astl.magical-light.com/web')
    },
    clearll () {
      localStorage.setItem('clearIs', 1)
      window.localStorage.clear()
      window.location.reload()
    },
    openLock () {
      this.clickNum += 1
      if (this.clickNum >= 5) {
        this.isLockUp = false
      }
    },
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    test () {
      Toast('功能暂未开放')
    },
    saveSignon () {
      http.post(Api.saveSignon, { userid: this.userId })
    },
    goMeun (url) {
      if (url === '/giftbag') {
        this.saveSignon()
      } else if (url === 'game') {
        http.get(Api.game + this.userId)
        // this.$router.push({ path: '/game' })
        if (this.userImg === '' || this.userImg === null || this.userImg === undefined || this.userImg === 'undefined') {
          this.userImg = 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/269961584330905_.pic_hd.jpg'
        }
        window.open(`http://sc.wayhu.cc/qywxkupaodati_kh_alk/index.php/index/index/middlepage?username=${this.userName}&wxid=${this.userId}&headimgurl=${this.userImg}`)
        return
      }
      this.$router.push({ path: url })
    }
  },
  components: {Back}
}
</script>
<style scoped>
  .clear {
    position: fixed;
    right: 20px;
    top: 20px;
    background: #ffffff;
  }
  .openLock {
    position: fixed;
    width: 100px;
    height: 80px;
    left: 0;
    top: 0;
  }
  .url_box {
    background-image: url("../assets/HOME_IMG.png");
    background-size: 100% 100%;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 18px;
    margin-top: 4px;
    text-align: center;
    line-height: 108px;
  }

  .menu img {
    vertical-align: middle;
    width: 82px;
  }

  .menu li {
    width: 108px;
    height: 108px;
  }

  .home-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("../assets/HOME_BG.png");
    background-size: 100% 100%;
  }

  .banner {
    height: 200px;
  }

  .banner img {
    width: 100%;
  }
</style>
