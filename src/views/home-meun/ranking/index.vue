<template>
  <div class="ranking">
    <div class="back" @click="back()">
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
            <img v-show="signonNum < 1" :src="JSPMXZicon" alt="" class="my_icon_img">
            <img v-show="signonNum > 0" :src="JSPMXZ01" alt="" class="my_icon_img">
          </li>
          <li>
            <img v-show="signonNum < 2" :src="JSPMXZicon" alt="" class="my_icon_img">
            <img v-show="signonNum > 1" :src="JSPMXZ02" alt="" class="my_icon_img">
          </li>
          <li>
            <img v-show="signonNum < 3" :src="JSPMXZicon" alt="" class="my_icon_img">
            <img v-show="signonNum > 2" :src="JSPMXZ03" alt="" class="my_icon_img">
          </li>
          <li>
            <img v-show="signonNum < 4" :src="JSPMXZicon" alt="" class="my_icon_img">
            <img v-show="signonNum > 3" :src="JSPMXZ04" alt="" class="my_icon_img">
          </li>
          <li>
            <img v-show="signonNum !== 5" :src="JSPMXZicon" alt="" class="my_icon_img">
            <img v-show="signonNum === 5" :src="JSPMXZ05" alt="" class="my_icon_img">
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <ul class="tab">
        <li v-show="showLeft" :style="backgroundDiv" @click="tabBtn(true)">
          日排行
        </li>
        <li v-show="!showLeft" :style="backgroundDiv2" @click="tabBtn(true)">
          日排行
        </li>
        <li v-show="showLeft" :style="backgroundDiv2" @click="tabBtn(false)">
          总排行
        </li>
        <li v-show="!showLeft" :style="backgroundDiv" @click="tabBtn(false)">
          总排行
        </li>
      </ul>
      <div class="user_info" :style="backgroundUser">
        <div class="left">
          <div class="num">{{userPointRankData.rank}}</div>
          <div class="title">排名</div>
        </div>
        <div class="center">
          <van-image
            round
            fit="cover"
            width="40px"
            height="40px"
            :src="userPointRankData.avatar"
          />
          <div class="name">{{userPointRankData.name}}</div>
        </div>
        <div class="right">
          <div class="num">{{userPointRankData.point}}</div>
          <div class="title">积分</div>
        </div>
      </div>
    </div>
    <div class="list_box">
      <ul class="list">
        <li v-for="(item, index) in rankDayData" :key="item.id" class="van-hairline--bottom">
          <div class="list_info">
            <img v-show="index+1 < 4" class="special" :src="JFPM01" alt="">
            <span v-show="index+1 > 3" class="special_num">{{index+1}}</span>
            <img class="picture" :src="item.avatar" alt="">
            <div class="list_name">{{item.name}}</div>
          </div>
          <div class="list_info_num">
            <span v-show="showLeft">{{item.pointday}}</span>
            <span v-show="!showLeft">{{item.point}}</span>
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
import http from '@/api/http'
import { Api } from '@/api/api'
export default {
  name: 'ranking',
  data () {
    return {
      userId: localStorage.getItem('userId'),
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
      rankDayData: '',
      signonNum: 0,
      pointRankData: '',
      userPointRankData: '',
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
    this.getSignon()
    this.getUserPointRank()
    this.getRankDay()
  },
  methods: {
    tabBtn (item) {
      this.showLeft = item
      if (item) {
        this.getRankDay()
      } else {
        this.getPointRank()
      }
    },
    /* 用户排行 */
    getUserPointRank () {
      http.get(Api.userPointRank + this.userId).then(res => {
        this.userPointRankData = res.data
      })
    },
    /* 总排行 */
    getPointRank () {
      http.get(Api.pointRank).then(res => {
        this.rankDayData = res.data
      })
    },
    /* 日排行 */
    getRankDay () {
      http.get(Api.rankDay).then(res => {
        this.rankDayData = res.data
      })
    },
    back () {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.back()
      }
    },
    getSignon () {
      http.get(Api.getSignon + this.userId).then(res => {
        this.signonNum = res.data
      })
    }
  },
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
