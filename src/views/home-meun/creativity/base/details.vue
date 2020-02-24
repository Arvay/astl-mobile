<template>
  <div class="details_box">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div style="height: 50px"></div>
    <!-- 图文详情 -->
    <div v-show="detailType === '2'" class="datail_text_img">
      <van-image
        @click="check(CYDSBanner)"
        class="banner"
        fit="cover"
        :src="CYDSBanner"
      />
    </div>
    <!-- 文章详情 -->
    <div class="datail_text">
      <div v-show="detailType === '1'" class="title">
        合规、你我共创 ，木受绳直、金就砺刚
      </div>
      <div class="name">陈威</div>
      <div class="content">
        &nbsp;&nbsp;&nbsp;孟子说：“即使有离娄那样好的视力，公输子那样好的技巧， 如果不用圆规和曲尺，也不能准确地画出方形和圆形；即使有师 旷样好的审音力，如果不用六律，也不能校正五音；即使有尧 舜的学说，如果不实施仁政，也不能治理好天下。现在有些诸侯， 虽然有仁爱的心和仁爱的名声，但老百姓却受不到他的恩泽，不 能成为后世效法的楷模，这是因为他没有实施前代圣王的仁政的 缘故。所以说，只有好心，不足以治理政治；只有好办法，好办 法不能够自己实行起来。《诗经》说：‘不犯错不迷狂，遵循先祖旧典章。’遵循前代圣王的法度而犯错误的，是从来 没有过的。圣人既用尽了目力，又用圆规、曲尺、水准、绳墨等 来制作方的、圆的、平的、直的东西，那些东西便用之不尽了；圣人既用尽了听力，又用六律来校正五音，各种音阶也就运用无穷 了；圣人既用尽了脑力，又施行不忍人的仁政，他的仁爱之德便 覆盖于天下了。所以说，筑高台一定要凭借山陵；挖深池一定要 凭借山沟沼泽；如果执政不凭借前代圣王的办法，能够说是明智 吗？所以只有仁慈的人才应该居于统治地位。如果不仁慈的人占 据了统治地位，就会把他的恶行败德传播给老百姓。在上的没 有道德规范，在下的人没有法规制度；朝廷不信道义，工匠不信尺度，官吏
      </div>
    </div>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import CYDSBanner from '@/assets/about2.jpg'
import { ImagePreview } from 'vant'

export default {
  data () {
    return {
      detailType: this.$route.params.type,
      backImg: BackImg,
      CYDSBanner: CYDSBanner
    }
  },
  created: function () {
  },
  methods: {
    check (src) {
      ImagePreview ({
        images: [
          src
        ]
      })
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .datail_text_img {
    .banner {
      width: 100%;
      height: 199px;
    }
  }
  .datail_text {
    .content {
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
      line-height: 14px;
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
