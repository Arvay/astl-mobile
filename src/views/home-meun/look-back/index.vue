<template>
  <div class="lookBack_box">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGDYRBanner" alt="">
    </div>
    <div class="content">
      <ul>
        <li>
          <van-image
            @click="goDetail(HGDYRBanner)"
            width="100%"
            height="100%"
            fit="cover"
            :src="HGDYRBanner"
          />
          <!--喜欢图标-->
          <div class="DZ_icon">
<!--            <img :src="DZDefeaticon" alt=""> &lt;!&ndash;未点击&ndash;&gt;-->
            <img :src="DZClickIcon" alt=""> <!--已点击-->
          </div>
        </li>
        <li>
          <van-image
            @click="play(HGDYRBanner)"
            width="100%"
            height="100%"
            fit="cover"
            :src="HGDYRBanner"
          />
          <!--播放图标-->
          <div @click="play(HGDYRBanner)" class="play_icon">
            <img :src="BFIcon" alt="">
          </div>
          <div class="DZ_icon">
            <img :src="DZDefeaticon" alt=""> <!--未点击-->
<!--            <img :src="DZClickIcon" alt=""> &lt;!&ndash;已点击&ndash;&gt;-->
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <van-image-preview :swipeDuration="100" v-model="show" :images="images" :closeable="true" @change="onChange">
      <template v-slot:index>
        <img class="aixin" :src="DZDefeaticon" alt=""> <!--未点击-->
<!--        <img class="aixin" :src="DZClickIcon" alt=""> &lt;!&ndash;已点击&ndash;&gt;-->
      </template>
    </van-image-preview>
    <VideoBox v-if="isPlay" :url="url" v-on:change="videoStates"></VideoBox>
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
export default {
  name: 'lookBack',
  data () {
    return {
      images: [],
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
  },
  methods: {
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
    goDetail (src) {
      this.show = true
      this.images.push(src)
    }
  },
  components: {
    VideoBox
  }
}
</script>
<style lang="scss">
  .lookBack_box .van-image-preview__index {
    top: auto !important;
    right: 1px !important;
    left: auto !important;
    bottom: 10px !important;
  }
  .lookBack_box .aixin {
    width: 35px;
    height: 30px;
  }
  .lookBack_box {
    .xiazai {
      width: 24px;
      height: 24px;
      margin-bottom: 4px;
      margin-right: 20px;
    }
  }
</style>
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
