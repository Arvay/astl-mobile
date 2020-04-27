<template>
  <scroller>
  <div class="details_box">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <div style="height: 50px"></div>
    <!-- 图文详情 -->
    <div v-if="mp4url === ''" v-show="detailType === '2'" class="datail_text_img">
      <van-image
        @click="check(dataInfo.image)"
        class="banner"
        fit="cover"
        :src="dataInfo.image"
      />
    </div>
    <video v-if="mp4url !== ''" width="100%" height="240px" :src="mp4url" :poster="dataInfo.image" type="application/vnd.apple.mpegurl" controls="controls" playsinline="true"
           webkit-playsinline="true" preload x-webkit-airplay="true" x5-playsinline="">
      您的浏览器不支持Video标签。
    </video>
    <!-- 文章详情 -->
    <div class="datail_text">
      <div class="title">
        {{dataInfo.title}}
      </div>
      <div class="name">{{dataInfo.name | namedddd}}</div>
      <div class="content" v-html="dataInfo.content">
<!--        <span v-for="(item, index) in desc" :key="index">-->
<!--          {{item}}-->
<!--          <br />-->
<!--        </span>-->
      </div>
    </div>
  </div>
  </scroller>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import CYDSBanner from '@/assets/about2.jpg'
import { ImagePreview } from 'vant'
import http from '@/api/http'
import { Api } from '@/api/api'
import wechat from 'weixin-js-sdk'

export default {
  name: 'creativityDetails',
  data () {
    return {
      mp4url: '',
      desc: '',
      dataInfo: '',
      detailType: this.$route.params.type,
      backImg: BackImg,
      CYDSBanner: CYDSBanner
    }
  },
  filters: {
    namedddd (item) {
      if (item) {
        item = item.split('$分割$')[0]
      }
      return item
    }
  },
  mounted () {
    this.showLeft = this.tabIndex
  },
  created: function () {
    this.getInfo()
  },
  methods: {
    back () {
      // this.$router.push({ path: '/creativity' })
      if (this.$route.params.type2 === '2') {
        this.$router.push({ path: '/creativity2' })
      } else {
        this.$router.push({ path: '/creativity' })
      }
    },
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    getInfo () {
      let id = this.$route.params.id
      var that = this
      http.get(Api.getActivityDetail + id).then(res => {
        wechat.ready(() => {
          wechat.onMenuShareAppMessage({
            title: '诺行合一', // 分享标题
            desc: `贰零贰零年 合规创意大赛《${res.data.title}》`, // 分享描述
            link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
            imgUrl: res.data.image, // 分享图标
            success: function () {
              that.watchAdd()
              // 用户确认分享后执行的回调函数
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          })
        })
        if (res.data.content) {
          this.desc = res.data.content
        }
        this.dataInfo = res.data
        if (res.data.name.indexOf('$分割$') >= 0) {
          for (var x of res.data.name.split('$分割$')) {
            if (x.indexOf('http') >= 0) {
              this.mp4url = x
            }
          }
        }
      })
    },
    check (src) {
      ImagePreview ({
        images: [
          src
        ],
        closeOnPopstate: true,
        closeable: true
      })
    }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
  .datail_text_img {
    .banner {
      width: 100%;
    }
  }
  .datail_text {
    .content {
      white-space: pre-wrap;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5D422B;
      line-height: 26px;
    }
    .name {
      margin-top: 12px;
      margin-bottom: 17px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #846952;
      line-height: 20px;
    }
  }
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #5D422B;
    line-height: 28px;
  }
  .details_box {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
    padding-top: 0;
  }
</style>
