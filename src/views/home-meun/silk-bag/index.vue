<template>
  <div class="silkbag_box">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGJNBanner" alt="">
    </div>
    <div class="content">
      <ul>
        <li @click="goDetail">
          <div class="time">2020年3月15日</div>
          <img :src="HGJNBanner" alt="">
          <div class="title">2020年合规周紧锣密鼓筹备后，闪亮登场！大家勇于参与！</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import HGJNBanner from '@/assets/HGJN_banner.png'
export default {
  name: 'silk_bag',
  data () {
    return {
      HGJNBanner: HGJNBanner,
      backImg: BackImg
    }
  },
  created: function () {
  },
  methods: {
    goDetail () {
      this.$router.push({ path: '/giftBagDetail/1' })
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .content {
    li {
      margin-bottom: 10px;
      text-align: center;
      .time {
        font-size: 14px;
        color: #B0947C;
        margin-bottom: 15px;
      }
      img {
        width: 100%;
        height: 194px;
        border-radius: 8px;
        margin-bottom: 7px;
      }
      .title {
        text-align: left;
        font-size: 16px;
        color: #5D422B;
        line-height: 28px;
      }
    }
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
  }
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }
</style>
