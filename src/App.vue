<template>
  <div id="app" @touchmove.prevent>
    <keep-alive exclude="creativityDetails,SilkBagDetail,ranking">
      <router-view class="router"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import defaultSetting from './settings'
import http from './api/http'
import { Api } from './api/api'
import { mapGetters } from 'vuex'
import wechat from 'weixin-js-sdk'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
    this.getSig()
  },
  computed: {
    ...mapGetters([
      'userName',
      'userImg',
      'userId'
    ]),
    transitionName () {
      if (defaultSetting.needPageTrans) {
        return this.$store.state.direction
      }
      return ''
    }
  },
  mounted () {
  },
  methods: {
    getSig () {
      if (window.location.href.indexOf('state=Ghost') >= 0) return
      let url = window.location.href.split('#')[0]
      http.post(Api.getSig, { url: url }).then(res => {
        var data = res.data
        wechat.config({
          beta: true, // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.corpid, // 必填，企业微信的corpID
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.noncestr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见 附录-JS-SDK使用权限签名算法
          jsApiList: [
            'hideAllNonBaseMenuItem',
            'onMenuShareAppMessage',
            'showMenuItems'
          ] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
        })
        wechat.ready(() => {
          let menuList = [
            'menuItem:share:appMessage'
          ]
          if (localStorage.getItem('userName') === '欣蕊') {
            menuList = [
              'menuItem:share:appMessage',
              'menuItem:copyUrl'
            ]
          }
          wechat.hideAllNonBaseMenuItem()
          wechat.showMenuItems({
            menuList: menuList // 要显示的菜单项
          })
          // wechat.hideMenuItems({
          //   menuList: [
          //     'menuItem:share:wechat', // 微信
          //     'menuItem:setFont', // 收藏
          //     'menuItem:favorite', // 字体放大
          //     'menuItem:copyUrl', // 复制链接
          //     'menuItem:openWithSafari', // 浏览器
          //     'menuItem:share:email' // 邮件
          //   ] // 要隐藏的菜单项
          // })
        })
      })
    }
  }
}
</script>

<style lang="scss">
.debug {
  p {
    color: #FEFDF5;
  }
  z-index: 99;
  position: fixed;
  top: 10px;
  right: 10px;
  background:rgba(0,0,0,.4);
  width: 100px;
}
.back {
  z-index: 9;
  position: fixed;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 30px;
  img {
    width: 100%;
  }
}
#app {
  position: fixed;
  bottom: 0;
  top: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #FEFDF5;
}
.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}
</style>
