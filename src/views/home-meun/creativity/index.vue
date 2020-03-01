<template>
  <div class="areativity_box">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <img class="banner" :src="CYDSBanner" alt="">
    <div class="main">
      <ul class="tab">
        <li :style="showLeft?backgroundDiv:backgroundDiv2" @click="setTabIndex(true)">
          群雄争霸
        </li>
        <li :style="showLeft?backgroundDiv2:backgroundDiv" @click="setTabIndex(false)">
          人中豪杰
        </li>
      </ul>
      <div style="position: relative">
        <div style="height: 15px"></div>
        <transition name="van-slide-left">
          <TabLeft v-show="showLeft"></TabLeft>
        </transition>
        <div style="position: absolute;top: 0;right: 0;width: 100%">
          <transition name="van-slide-right">
            <TabRight v-show="!showLeft"></TabRight>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabLeft from './base/tab-left'
import TabRight from './base/tab-right'
import store from '@/store'
import { mapGetters } from 'vuex'
import CYDSBanner from '@/assets/CYDS_banner.png'
import BackImg from '@/assets/back_btn.png'
import CYHGCheckBtn from '@/assets/CYHG_check_btn.png'
import CYHGDefeatBtn from '@/assets/CYHG_defeat_btn.png'
export default {
  name: 'areativity',
  computed: {
    ...mapGetters([
      'tabIndex'
    ])
  },
  data () {
    return {
      showLeft: true,
      CYDSBanner: CYDSBanner,
      backImg: BackImg,
      backgroundDiv: {
        backgroundImage: 'url(' + CYHGCheckBtn + ')'
      },
      backgroundDiv2: {
        backgroundImage: 'url(' + CYHGDefeatBtn + ')'
      }
    }
  },
  mounted () {
    this.showLeft = this.tabIndex
  },
  created: function () {
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
    setTabIndex (val) {
      this.showLeft = val
      store.dispatch('setTabIndex', val)
    }
  },
  components: {
    TabLeft, TabRight
  }
}
</script>
<style scoped lang="scss">
  .main {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
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
    width: 100%;
  }
</style>
