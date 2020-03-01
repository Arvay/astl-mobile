<template>
  <div>
    <div class="back" style="z-index: 999999" @click="back">
      <img :src="backImg" alt="">
    </div>
    <div style="text-align: center">
      <div v-show="messageShow" class="pdfMess">加载中...</div>
      <iframe class="iframe" :src="pdfUrl" scrolling="auto" frameborder="0" height="100%" width="100%"></iframe>
<!--      <pdf v-for="item in numPages" :key="item" :src="pdfUrl" :page="item" />-->
    </div>
    <Mark v-if="showWrite" :inputText="userInfo" :inputAllowDele="true" :inputDestroy="true"></Mark>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import { mapGetters } from 'vuex'
import Mark from '@/components/waterMark'
export default {
  computed: {
    ...mapGetters([
      'userName',
      'userEmail'
    ])
  },
  data () {
    return {
      userInfo: '',
      showWrite: true,
      messageShow: true,
      numPages: '',
      pdfUrl: 'https://yibaifiles-1252497236.cos.ap-chengdu.myqcloud.com/saasBGM/%E7%99%BE%E5%BA%A6%E7%BB%9F%E8%AE%A1%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E.pdf',
      backImg: BackImg
    }
  },
  created: function () {
    this.userInfo = this.userName + '  ' + this.userEmail
  },
  methods: {
    back () {
      this.showWrite = false
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.back()
      }
    }
  },
  components: {
    Mark
  }
}
</script>
<style scoped lang="scss">
  .iframe {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .pdfMess {
    margin-top: 40%;
    font-size: 16px;
  }
</style>
