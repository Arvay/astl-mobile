<template>
  <div class="spokesperson_box">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGDYRBanner" alt="">
    </div>
    <!--上拉加载-->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ul class="list">
        <li>
          <img @click="videoPlay" class="list_banner" :src="CYDSBanner" alt="">
          <div class="info" style="text-align: left;">
            <div class="title van-ellipsis">
              【吴梦彤】一生行走，合规为伴
              【吴梦彤】一生行走，合规为伴
              【吴梦彤】一生行走，合规为伴
            </div>
            <div class="num">
              <img :src="LLIcon" alt="">
              观看：1000
            </div>
            <div class="praise">
              <img :src="DZDefeat" alt=""> <!--未点赞-->
              <!--            <img :src="DZClick" alt=""> &lt;!&ndash;已点赞&ndash;&gt;-->
              <div>33</div>
            </div>
          </div>
        </li>
      </ul>
    </van-list>
    <!--播放器-->
    <VideoBox v-if="isPlay" v-on:change="videoStates"></VideoBox>
  </div>
</template>

<script>
import VideoBox from '@/components/video'
import BackImg from '@/assets/back_btn.png'
import HGDYRBanner from '@/assets/HGDYR_banner.png'
import LLIcon from '@/assets/LL_icon.png'
import DZClick from '@/assets/DZ_click.png'
import DZDefeat from '@/assets/DZ_defeat.png'
import CYDSBanner from '@/assets/about2.jpg'

export default {
  name: 'spokesperson',
  data () {
    return {
      list: [],
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
  created: function () {
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    videoStates (item) {
      this.isPlay = false
    },
    videoPlay () {
      this.isPlay = true
    }
  },
  components: {
    VideoBox
  }
}
</script>
<style scoped lang="scss">
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
    width: 295px;
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
