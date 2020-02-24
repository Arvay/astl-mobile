<template>
  <div class="ranking">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="JFPMBanner" alt="">
      <div class="my_icon">
        <ul>
          <li>
            <span>我的勋章：</span>
          </li>
          <li>
<!--            <img :src="JSPMXZicon" alt="" class="my_icon_img">-->
            <img :src="JSPMXZ01" alt="" class="my_icon_img">
          </li>
          <li>
<!--            <img :src="JSPMXZicon" alt="" class="my_icon_img">-->
            <img :src="JSPMXZ02" alt="" class="my_icon_img">
          </li>
          <li>
<!--            <img :src="JSPMXZicon" alt="" class="my_icon_img">-->
            <img :src="JSPMXZ03" alt="" class="my_icon_img">
          </li>
          <li>
<!--            <img :src="JSPMXZicon" alt="" class="my_icon_img">-->
            <img :src="JSPMXZ04" alt="" class="my_icon_img">
          </li>
          <li>
<!--            <img :src="JSPMXZicon" alt="" class="my_icon_img">-->
            <img :src="JSPMXZ05" alt="" class="my_icon_img">
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <ul class="tab">
        <li :style="showLeft?backgroundDiv:backgroundDiv2" @click="showLeft=true">
          日排行
        </li>
        <li :style="showLeft?backgroundDiv2:backgroundDiv" @click="showLeft=false">
          总排行
        </li>
      </ul>
      <div class="user_info" :style="backgroundUser">
        <div class="left">
          <div class="num">900</div>
          <div class="title">排名</div>
        </div>
        <div class="center">
          <van-image
            round
            fit="cover"
            width="40px"
            height="40px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <div class="name">陈威</div>
        </div>
        <div class="right">
          <div class="num">600</div>
          <div class="title">积分</div>
        </div>
      </div>
    </div>
    <div class="list_box">
      <ul class="list">
        <li class="van-hairline--bottom">
          <div class="list_info">
            <img class="special" :src="JFPM01" alt="">
            <img class="picture" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
            <div class="list_name">陈威</div>
          </div>
          <div class="list_info_num">
            <span>999999</span>
            <img :src="JFIcon" alt="">
          </div>
        </li>
        <li class="van-hairline--bottom">
          <div class="list_info">
            <span class="special_num">4</span>
            <img class="picture" src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
            <div class="list_name">陈威</div>
          </div>
          <div class="list_info_num">
            <span>999999</span>
            <img :src="JFIcon" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import JSPMXZ01 from '@/assets/JSPM_XZ_01_icon.png'
import JSPMXZ02 from '@/assets/JSPM_XZ_02_icon.png'
import JSPMXZ03 from '@/assets/JSPM_XZ_03_icon.png'
import JSPMXZ04 from '@/assets/JSPM_XZ_04_icon.png'
import JSPMXZ05 from '@/assets/JSPM_XZ_05_icon.png'
import JFPM01 from '@/assets/JF_PM_01.png'
import JFPM02 from '@/assets/JF_PM_02.png'
import JFPM03 from '@/assets/JF_PM_03.png'
import JFIcon from '@/assets/JF_icon.png'
import JSPMXZicon from '@/assets/JSPM_XZ_06_icon.png'
import BackImg from '@/assets/back_btn.png'
import JFPMJZBg from '@/assets/JFPM_JZ_bg.png'
import JFPMBanner from '@/assets/JFPM_banner.png'
import CYHGCheckBtn from '@/assets/CYHG_check_btn.png'
import CYHGDefeatBtn from '@/assets/CYHG_defeat_btn.png'
export default {
  name: 'ranking',
  data () {
    return {
      JFIcon: JFIcon,
      JSPMXZ01: JSPMXZ01,
      JSPMXZ02: JSPMXZ02,
      JSPMXZ03: JSPMXZ03,
      JSPMXZ04: JSPMXZ04,
      JSPMXZ05: JSPMXZ05,
      JFPM01: JFPM01,
      JFPM02: JFPM02,
      JFPM03: JFPM03,
      JSPMXZicon: JSPMXZicon,
      showLeft: true,
      backgroundUser: {
        backgroundImage: 'url(' + JFPMJZBg + ')'
      },
      backgroundDiv: {
        backgroundImage: 'url(' + CYHGCheckBtn + ')'
      },
      backgroundDiv2: {
        backgroundImage: 'url(' + CYHGDefeatBtn + ')'
      },
      backImg: BackImg,
      JFPMJZBg: JFPMJZBg,
      JFPMBanner: JFPMBanner
    }
  },
  created: function () {
  },
  methods: {},
  components: {}
}
</script>
<style scoped lang="scss">
  .van-hairline--bottom {
    display: flex;
    justify-content: space-between;
  }
  .list_info_num {
    display: flex;
    align-items: center;
    float: right;
    span {
      margin-right: 5px;
      font-size: 18px;
      color: #846952;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
  .list_box {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 15px 15px;
    .list {
      li {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 14px 0 12px 0;
        .list_name {
          margin-left: 10px;
          font-size: 18px;
          color: #846952;
        }
        .list_info {
          display: flex;
          justify-content: left;
          align-items: center;
        }
        .picture {
          margin-left: 15px;
          width: 37px;
          height: 37px;
          border: 2px solid rgba(255,255,255,0.55);
          border-radius: 10px;
        }
      }
    }
    .special_num {
      width: 28px;
      text-align: center;
      font-size: 16px;
      color: #771011;
    }
    .special {
      width: 28px;
      height: 28px;
    }
  }
  .my_icon {
    position: absolute;
    bottom: 0;
    right: 10px;
    li {
      float: left;
    }
    span {
      font-size: 13px;
      color: #5D422B;
      line-height: 45px;
    }
    .my_icon_img {
      width: 45px;
      height: 45px;
    }
  }
  .center {
    .name {
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      line-height: 14px;
      color: #846952;
    }
    position: absolute;
    width: 40px;
    top: 18px;
    left: 50%;
    margin-left: -20px;
  }
  .user_info {
    position: relative;
    .num {
      font-family: PingFangSC-Semibold;
      font-size: 18px;
      color: #771011;
      text-align: center;
    }
    .title {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #846952;
      letter-spacing: 0;
    }
    .left {
      margin-top: 28px;
      float: left;
      margin-left: 56px;
    }
    .right {
      margin-top: 28px;
      margin-right: 56px;
      float: right;
    }
    margin-top: 10px;
    width: 100%;
    height: 85px;
    background-size: 100% 100%;
    img {
      width: 100%;
    }
  }
  .content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
  }
  .tab {
    display: flex;
    justify-content: space-between;
    li {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 36px;
      text-align: center;
      width: 170px;
      background-size: 100% 100%;
    }
  }
  .banner {
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
