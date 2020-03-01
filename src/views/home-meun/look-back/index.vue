<template>
  <div class="lookBack_box">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGDYRBanner" alt="">
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in images" :key="index">
          <div>
            <van-image
              @click="goDetail(index)"
              width="115px"
              height="115px"
              fit="cover"
              :src="item"
            />
            <!--喜欢图标-->
            <div class="DZ_icon">
              <!--            <img :src="DZDefeaticon" alt=""> &lt;!&ndash;未点击&ndash;&gt;-->
              <img @click="lovaeBtn" :src="DZClickIcon" alt=""> <!--已点击-->
            </div>
          </div>
        </li>
<!--        <li>-->
<!--          <van-image-->
<!--            @click="play(HGDYRBanner)"-->
<!--            width="100%"-->
<!--            height="100%"-->
<!--            fit="cover"-->
<!--            :src="HGDYRBanner"-->
<!--          />-->
<!--          &lt;!&ndash;播放图标&ndash;&gt;-->
<!--          <div @click="play(HGDYRBanner)" class="play_icon">-->
<!--            <img :src="BFIcon" alt="">-->
<!--          </div>-->
<!--          <div class="DZ_icon">-->
<!--            <img :src="DZDefeaticon" alt=""> &lt;!&ndash;未点击&ndash;&gt;-->
<!--&lt;!&ndash;            <img :src="DZClickIcon" alt=""> &lt;!&ndash;已点击&ndash;&gt;&ndash;&gt;-->
<!--          </div>-->
<!--        </li>-->
      </ul>
    </div>
    <van-image-preview :startPosition="startPosition" :swipeDuration="100" v-model="show" :images="images" :closeable="true" @change="onChange">
<!--      <template v-slot:index>-->
<!--        第{{index}}页-->
<!--      </template>-->
    </van-image-preview>
<!--    <VideoBox v-if="isPlay" :url="url" v-on:change="videoStates"></VideoBox>-->
  </div>
</template>
<script>
import VideoBox from '@/components/video'
import BackImg from '@/assets/back_btn.png'
import BFIcon from '@/assets/BF_icon.png'
import DZClickIcon from '@/assets/DZ_click_icon.png'
import DZDefeaticon from '@/assets/DZ_defeat_icon.png'
import HGDYRBanner from '@/assets/JCHD_banner.png'
import DownloadIcon from '@/assets/Download_icon.png'
import http from '@/api/http'
import { Api } from '@/api/api'
import { Toast } from 'vant'
export default {
  name: 'lookBack',
  data () {
    return {
      startPosition: 2,
      images: [],
      dataList: '',
      show: false,
      index: 0,
      url: '',
      isPlay: false,
      backImg: BackImg,
      BFIcon: BFIcon,
      DZClickIcon: DZClickIcon,
      DZDefeaticon: DZDefeaticon,
      HGDYRBanner: HGDYRBanner,
      DownloadIcon: DownloadIcon
    }
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
    lovaeBtn () {
      Toast('喜欢')
    },
    getData () {
      let user = localStorage.getItem('userId')
      http.get(Api.getActivityList + `4/${user}`).then(res => {
        let data = res.data
        for (var item of data) {
          let i = item.image.split(',')
          for (var img of i) {
            this.images.push(img)
          }
        }
        this.dataList = data
      })
    },
    onChange (index) {
      this.index = index
    },
    play (url) {
      this.isPlay = true
      this.url = 'http://1257099670.vod2.myqcloud.com/0d1f8b95vodtransgzp1257099670/b8e659c25285890795767718609/v.f30.mp4'
    },
    videoStates () {
      this.isPlay = false
    },
    goDetail (index) {
      this.startPosition = index
      this.show = true
    }
  },
  components: {
    VideoBox
  }
}
</script>
<!--<style lang="scss">-->
<!--  .lookBack_box .van-image-preview__index {-->
<!--    top: auto !important;-->
<!--    right: 1px !important;-->
<!--    left: auto !important;-->
<!--    bottom: 10px !important;-->
<!--  }-->
<!--  .lookBack_box .aixin {-->
<!--    width: 35px;-->
<!--    height: 30px;-->
<!--  }-->
<!--  .lookBack_box {-->
<!--    .xiazai {-->
<!--      width: 24px;-->
<!--      height: 24px;-->
<!--      margin-bottom: 4px;-->
<!--      margin-right: 20px;-->
<!--    }-->
<!--  }-->
<!--</style>-->
<style scoped lang="scss">
  .DZ_icon {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 20px;
    height: 17px;
    img {
      width: 100%;
    }
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
  .content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    ul {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding-left: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      li {
        overflow: hidden;
        position: relative;
        margin-left: 5px;
        margin-bottom: 5px;
        width: 115px;
        height: 115px;
        .list_banner {
        }
      }
    }
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
