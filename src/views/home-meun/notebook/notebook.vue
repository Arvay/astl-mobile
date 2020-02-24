<template>
  <div class="container">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div class="HGSCTop">
      <img :src="HGSCTop" alt="">
    </div>
    <div class="title">
      <img :src="HGSCTilte" alt="">
    </div>
    <div class="main_box">
      <div class="main">
        <p>&nbsp;&nbsp;&nbsp;本人确认已收到公司提供的合规手册，已经接受公司提供的合规政策相关培训，阅读并且熟知合规政策相关文件，本人已经了解安斯泰来关于反贿赂和反腐败合规的相关要求和期望。</p>
        <p>&nbsp;&nbsp;&nbsp;本人确认会遵守安斯泰来全球以及安斯泰来中国的相关合规政策，包括但不限于安斯泰来集团行为准则，安 斯泰来集团反贿赂与反腐败合规政策，安斯泰来集团利益冲突政策， 安斯泰来外部互动准则以及流程，安斯 泰来制药(中国)有限公司隐私数据保护规范及公司其他相关规定。</p>
        <p>&nbsp;&nbsp;&nbsp;本人承诺，同时本人承诺会承担管理责任监督下属:</p>
        <p>• 确保所有与工作相关活动和费用真实、准确、无误导。</p>
      </div>
    </div>
    <div class="check_view_btn">
<!--      <img :src="HGSCCKBtn" alt="">-->
      <img @click="show=true" :src="HGSCQZBtn2" alt="">
    </div>
    <div class="language_tab">
      <img :src="HGSCChineseBtn" alt="">
      <img :src="HGSCEnglishBtn" alt="">
    </div>
    <!-- 签字面板 -->
    <van-popup v-model="show"
               round
               position="bottom"
               :style="{ height: '30%' }">
      <Write></Write>
    </van-popup>
  </div>
</template>
<script>
import Write from './base/write'
import HGSCTilte from '@/assets/HGSC_tilte.png'
import BackImg from '@/assets/back_btn.png'
import HGSCTop from '@/assets/HGSC_top_img.png'
import HGSCCKBtn from '@/assets/HGSC_CK_btn.png' // 查看
import HGSCQZBtn2 from '@/assets/HGSC_QZ_btn2.png' // 少侠请确认
import HGSCChineseBtn from '@/assets/HGSC_Chinese_btn.png' // 中文切换
import HGSCEnglishBtn from '@/assets/HGSC_english_btn.png' // 英文切换
export default {
  name: 'FooterTabbar',
  data () {
    return {
      show: false,
      HGSCTilte: HGSCTilte,
      backImg: BackImg,
      HGSCTop: HGSCTop,
      HGSCCKBtn: HGSCCKBtn,
      HGSCChineseBtn: HGSCChineseBtn,
      HGSCEnglishBtn: HGSCEnglishBtn,
      HGSCQZBtn2: HGSCQZBtn2
    }
  },
  methods: {
  },
  components: {
    Write
  }
}
</script>
<style lang="scss" scoped>
  .van-popup {
    background: #FEFDF5 !important;
  }
  .test {
    background: white;
    position: fixed;
    z-index: 2;
    top: 0;
  }
  .language_tab {
    margin-top: 14px;
    text-align: right;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;padding-right: 10px;
    img {
      margin-right: 10px;
      width: 127px;
      height: 40px;
    }
  }
  .check_view_btn {
    width: 100%;
    margin-top: 14px;
    text-align: right;
    img {
      margin-right: 20px;
      width: 264px;
      height: 40px;
    }
  }
  .main_box {
    margin-top: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .main {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 26px 27px 26px 27px;
    width: 355px;
    height: 430px;
    background-image: url('~@/assets/HGSC_JZ_bg.png');
    background-size: 100% 100%;
    p {
      line-height: 28px;
      margin: 0;
      color: #5D422B;
      font-size: 14px;
      font-family: PingFangSC-Regular;
    }
  }
  .title {
    margin-top: 50px;
    width: 100%;
    text-align: center;
    img {
      width: 198px;
    }
  }
  .HGSCTop {
    width: 124px;
    height: 103px;
    position: absolute;
    right: 0;
    top: 0;
      img {
        width: 100%;
      }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('~@/assets/home-banner.png');
    background-size: 100% 100%;
  }
</style>
