<template>
  <div class="spokesperson_box">
    <div class="back" v-show="!isPlay" @click="back">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGDYRBanner" alt="">
    </div>
    <ul class="list">
      <li v-for="item in dataList" :key="item.id">
        <div style="position: relative">
          <van-image
            @click="videoPlay(item.title, item.image, item.id)"
            width="100%"
            height="194px"
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
    <!--播放器-->
    <VideoBox v-if="isPlay" :img="videoImg" :url="videoUrl" v-on:change="videoStates"></VideoBox>
  </div>
</template>

<script>
import VideoBox from '@/components/video'
import BFIcon from '@/assets/BF_icon.png'
import BackImg from '@/assets/back_btn.png'
import HGDYRBanner from '@/assets/HGDYR_banner.png'
import LLIcon from '@/assets/LL_icon.png'
import DZClick from '@/assets/DZ_click.png'
import DZDefeat from '@/assets/DZ_defeat.png'
import CYDSBanner from '@/assets/about2.jpg'
import http from '@/api/http'
import { Api } from '@/api/api'
import { mapGetters } from 'vuex'
import { Notify, Toast } from 'vant'

export default {
  name: 'spokesperson',
  data () {
    return {
      videoImg: '',
      videoUrl: '',
      list: [],
      dataList: '',
      BFIcon: BFIcon,
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
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  created: function () {
    this.getData()
  },
  methods: {
    back () {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.back()
      }
    },
    setLike (id) {
      let params = {
        id: id,
        type: 3,
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
      let user = localStorage.getItem('userId')
      http.get(Api.getActivityList + `3/${user}`).then(res => {
        this.dataList = res.data
      })
    },
    videoStates (item) {
      this.isPlay = false
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
