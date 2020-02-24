<template>
  <div class="box_box">
    <div class="text van-hairline--bottom">
      <div @click="goDetail(1)">
        <p class="van-ellipsis title">合规、你我共创 、木受绳直、金就砺刚金就砺刚金就砺刚金就砺刚金就砺刚金就砺刚</p>
        <div class="info">
          <span class="num">排名：1</span>
          <span class="name">陈威</span>
          <span class="name score">票数：111111</span>
        </div>
        <div @click.stop="test" class="vote_btn">
          <img :src="TPDefeat" alt=""> <!--未投-->
          <!--              <img :src="TPCLick" alt=""> &lt;!&ndash;已投&ndash;&gt;-->
        </div>
      </div>
    </div>
    <!--第二种形态-->
    <div class="img_text van-hairline--bottom">
      <div @click="goDetail(2)">
        <van-image
          class="banner"
          fit="cover"
          :src="CYDSBanner"
        />
        <div class="info">
          <span class="num">排名：1</span>
          <span class="name">周梦华</span>
          <span class="score">票数：999</span>
          <div @click="test" class="vote_btn">
            <img :src="TPDefeat" alt=""> <!--未投-->
            <!--              <img :src="TPCLick" alt=""> &lt;!&ndash;已投&ndash;&gt;-->
          </div>
        </div>
      </div>
      <div style="height: 15px"></div>
    </div>
  </div>
</template>

<script>
import TPDefeat from '@/assets/TP_defeat.png'
import TPCLick from '@/assets/TP_CLick.png'
import CYDSBanner from '@/assets/about2.jpg'

export default {
  data () {
    return {
      TPDefeat: TPDefeat,
      TPCLick: TPCLick,
      CYDSBanner: CYDSBanner
    }
  },
  created: function () {
  },
  methods: {
    test () {
      console.log('123')
    },
    goDetail (type) {
      this.$router.push({ path: `/creativityDetails/${type}` })
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .img_text {
    margin-top: 15px;
    .banner {
      width: 100%;
      height: 199px;
    }
    .info {
      line-height: 45px;
      position: relative;
      .score {
        color: #846952;
        font-size: 12px;
        margin-left: 130px;
      }
      .vote_btn {
        top: -1px;
      }
    }
  }
  .vote_btn {
    position: absolute;
    top: 2px;
    right: 0;
    width: 45px;
    height: 45px;
    img {
      height: 45px;
      width: 45px;
    }
  }
  .info {
    margin: 0;
    margin-top: 5px;
    .num {
      border-radius: 2px;
      font-size: 12px;
      text-align: center;
      line-height: 16px;
      color: #ffffff;
      display: inline-block;
      background: #771011;
      width: 46px;
      margin-bottom: 15px;
    }
    .name {
      margin-left: 4px;
      color: #846952;
      font-size: 14px;
      line-height: 16px;
    }
    .score {
      margin-left: 20px;
    }
  }
  .box_box {
    .text {
      position: relative;
      margin-top: 15px;
      .title {
        width: 289px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #5D422B;
      }
    }
  }
</style>
