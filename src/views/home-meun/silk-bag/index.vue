<template>
  <div class="silkbag_box">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <div class="banner">
      <img :src="HGJNBanner" alt="">
    </div>
    <div class="content">
      <ul>
        <li v-for="item in dataList" :key="item.id" @click="goDetail(item.id)">
          <div class="time">{{item.content}}</div>
          <img :src="item.image" alt="">
          <div class="title">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import HGJNBanner from '@/assets/HGJN_banner.png'
import http from '@/api/http'
import { Api } from '@/api/api'
import { mapGetters } from 'vuex'
export default {
  name: 'silk_bag',
  data () {
    return {
      dataList: '',
      HGJNBanner: HGJNBanner,
      backImg: BackImg
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
    getData () {
      let user = localStorage.getItem('userId')
      http.get(Api.getActivityList + `5/${user}`).then(res => {
        this.dataList = res.data
      })
    },
    goDetail (id) {
      this.$router.push({ path: '/giftBagDetail/' + id })
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
