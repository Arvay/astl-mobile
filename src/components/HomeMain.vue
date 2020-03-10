<template>
  <div class="home-box">
    <div class="banner">
      <img src="../assets/HOME_banner.png" alt="">
    </div>
    <div class="url_box">
      <ul class="menu" style="margin-top: 0">
        <li>
          <!--2020合规周-->
          <img @click="goMeun('/schedule')" src="../assets/HOME_HGZ_icon.png" alt="">
        </li>
        <li>
          <!--合规锦囊-->
          <img @click="goMeun('/giftbag')" src="../assets/HOME_HGJN_icon.png" alt="">
        </li>
        <li>
          <!--闯关答题-->
          <img @click="goMeun('game')" src="../assets/HOME_CGDT_icon.png" alt="">
        </li>
      </ul>
      <ul class="menu">
        <li>
          <!--合规代言人-->
          <img @click="goMeun('/spokesperson')" src="../assets/HOME_HGDYR_icon.png" alt="">
        </li>
        <li>
          <!--中间log-->
          <img @click="goMeun('/lookback')" style="width: 108px" src="../assets/logo.png" alt="">
        </li>
        <li>
          <!--创意大赛-->
          <img @click="goMeun('/creativity')" src="../assets/HOME_HGCYS_icon.png" alt="">
        </li>
      </ul>
      <ul class="menu">
        <li>
          <!--合规云课堂-->
          <img @click="goMeun('/spokesperson/2')" src="../assets/HOME_HGYKT_icon.png" alt="">
        </li>
        <li>
          <!--合规手册-->
          <img @click="goMeun('/notebook')" src="../assets/HOME_HGSC_icon.png" alt="">
        </li>
        <li>
          <!--积分排名-->
          <img @click="goMeun('/ranking')" src="../assets/HOME_JFPM_icon.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import http from '@/api/http'
import { Api } from '@/api/api'
import { Toast } from 'vant'
export default {
  name: 'FooterTabbar',
  computed: {
    ...mapGetters([
      'userId',
      'userName',
      'userImg'
    ])
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
    test () {
      Toast('功能暂未开放')
    },
    saveSignon () {
      http.post(Api.saveSignon, { userid: this.userId })
    },
    goMeun (url) {
      if (url === '/giftbag') {
        this.saveSignon()
      } else if (url === 'game') {
        http.get(Api.game + this.userId)
        if (!this.userId || !this.userName || !this.userImg) {
          Toast('获取用户信息错误')
        }
        // console.log(`http://dt.wayhuh5.top/qywxkupaodati_kh_alk/index.php/index/index/index.html?username=${this.userName}&wxid=${this.userId}&headimgurl=${this.userImg}`)
        window.location.replace(`http://dt.wayhuh5.top/qywxkupaodati_kh_alk/index.php/index/index/middlepage?username=${this.userName}&wxid=${this.userId}&headimgurl=${this.userImg}`)
        return
      }
      this.$router.push({ path: url })
    }
  },
  components: {}
}
</script>
<style scoped>
  .url_box {
    background-image: url("../assets/HOME_IMG.png");
    background-size: 100% 100%;
  }
  .menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 18px;
    margin-top: 4px;
    text-align: center;
    line-height: 108px;
  }

  .menu img {
    vertical-align: middle;
    width: 82px;
  }

  .menu li {
    width: 108px;
    height: 108px;
  }

  .home-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url("../assets/HOME_BG.png");
    background-size: 100% 100%;
  }

  .banner {
    height: 200px;
  }

  .banner img {
    width: 100%;
  }
</style>
