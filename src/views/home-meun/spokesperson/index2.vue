<template>
  <div class="spokesperson_box">
    <div class="back" v-show="!isPlay" @click="back">
      <img :src="backImg" alt="">
    </div>
    <scroller>
      <div class="banner">
        <img :src="HGYKTBanner" alt="">
      </div>
      <ul class="list">
        <li v-for="item in dataList" :key="item.id">
          <div style="position: relative">
            <van-image
              @click="videoPlay(item.title, item.image, item.id)"
              width="100%"
              fit="cover"
              :src="item.image"
            />
            <div @click="videoPlay(item.title, item.image, item.id)" class="play_icon">
              <img :src="BFIcon" alt="">
            </div>
          </div>
          <div class="info" style="text-align: left;">
            <div class="title">
              {{item.content}}
            </div>
            <div class="num">
              <img :src="LLIcon" alt="">
              观看：{{item.lookcount}}
            </div>
            <div class="praise">
              <img v-show="item.limit===0" @click="setLike(item.id)" :src="DZDefeat" alt=""> <!--未点赞-->
              <img v-show="item.limit===1" :src="DZClick" alt=""> <!--已点赞-->
              <div>{{item.likecount}}</div>
            </div>
          </div>
        </li>
      </ul>
    </scroller>
    <!--播放器-->
    <VideoBox v-if="isPlay" :img="videoImg" :url="videoUrl" v-on:change="videoStates"></VideoBox>
  </div>
</template>

<script>
import VideoBox from '@/components/video'
import HGYKTBanner from '@/assets/HGYKT_banner.png'
import BFIcon from '@/assets/BF_icon.png'
import BackImg from '@/assets/back_btn.png'
import HGDYRBanner from '@/assets/HGDYR_banner.png'
import LLIcon from '@/assets/LL_icon.png'
import DZClick from '@/assets/DZ_click.png'
import DZDefeat from '@/assets/DZ_defeat.png'
import CYDSBanner from '@/assets/about2.jpg'
import http from '@/api/http'
import { Api } from '@/api/api'
import { Notify, Toast } from 'vant'
import wechat from 'weixin-js-sdk'

export default {
  name: 'spokesperson2',
  data () {
    return {
      userId: localStorage.getItem('userId2'),
      pageType: 2,
      videoImg: '',
      videoUrl: '',
      list: [],
      dataList: '',
      BFIcon: BFIcon,
      HGYKTBanner: HGYKTBanner,
      loading: false,
      finished: false,
      isPlay: false,
      DZDefeat: DZDefeat,
      backImg: BackImg,
      DZClick: DZClick,
      HGDYRBanner: HGDYRBanner,
      CYDSBanner: CYDSBanner,
      LLIcon: LLIcon
    }
  },
  mounted () {
    let desc = '贰零贰零年 合规云课堂列表'
    let imgUrl = 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGYKT_banner.png'
    var that = this
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: desc, // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: imgUrl, // 分享图标
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
    setLike (id) {
      let params = {
        id: id,
        type: 7,
        userid: this.userId
      }
      http.post(Api.activityLike, params).then(res => {
        if (res.code === 0) {
          this.getData()
          Toast('成功点赞')
        } else {
          Toast(res.message)
        }
      })
    },
    getData () {
      let user = localStorage.getItem('userId2')
      let type = 7
      http.get(Api.getActivityList + `${type}/${user}`).then(res => {
        this.dataList = res.data
      })
    },
    videoStates (item) {
      this.isPlay = false
      this.getData()
    },
    videoPlay (item, img, id) {
      this.videoUrl = item
      this.videoImg = img
      this.isPlay = true
      http.get(Api.getActivityDetail + id)
    }
  },
  components: {
    [Notify.name]: Notify,
    [Toast.name]: Toast,
    VideoBox
  }
}
</script>
<style scoped lang="scss">
  .spokesperson_box {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .play_icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    img {
      width: 100%;
    }
  }
  .praise {
    text-align: center;
    position: absolute;
    right: 0;
    top: 8px;
    font-size: 12px;
    color: #846952;
    img {
      width: 30px;
    }
  }
  .list {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 15px 15px 15px;
    li {
      margin-bottom: 22px;
    }
    .num {
      margin-top: 6px;
      display: flex;
      justify-content: left;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #846952;
      text-align: left;
      img {
        margin-right: 5px;
        width: 17px;
        height: 17px;
      }
    }
    .list_banner {
      margin-bottom: 6px;
      width: 100%;
      height: 194px;
      border-radius: 4px;
    }
  }
  .info {
    position: relative;
  }
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    width: 295px;
    overflow: hidden;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #5D422B;
    line-height: 28px;
  }
  .banner {
    img {
      width: 100%;
    }
  }
</style>
