<template>
  <div class="pdf_box_boss">
    <div class="back" style="z-index: 999999" @click="back">
      <img :src="backImg" alt="">
    </div>
    <scroller>
      <div v-show="viewType === '2'" class="pdf_box" style="text-align: center">
        <div class="zhezhao">
        </div>
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/1.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/2.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/3.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/4.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/5.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/6.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/7.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/8.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/9.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/10.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/11.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/12.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/13.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/14.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/15.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/16.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/17.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/18.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/19.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/20.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/21.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/22.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/23.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/24.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/25.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/26.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/27.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/28.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/29.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/30.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/31.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/32.png" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE2/33.png" alt="">
      </div>
    <div v-show="viewType === '1'" class="pdf_box" style="text-align: center">
      <div class="zhezhao">
      </div>
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C1.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C4.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C6.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C7.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C8.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C9.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C10.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C11.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C12.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C13.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C14.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C15.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C16.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C17.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C18.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C19.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C20.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C21.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C22.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C23.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C24.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C25.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C26.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C27.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C28.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C29.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C30.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C31.jpg" alt="">
      <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfC/C32.jpg" alt="">
    </div>
    <Mark v-if="showWrite" :inputText="userInfo" :inputAllowDele="true" :inputDestroy="true"></Mark>
    </scroller>
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
      viewType: this.$route.params.type,
      userInfo: '',
      showWrite: true,
      messageShow: true,
      astlcode: localStorage.getItem('astlcode'),
      numPages: '',
      pdfUrl: 'http://acntsp01.astellas-cn.com:8001/pdf/中文合规手册-校对后.pdf',
      backImg: BackImg
    }
  },
  created: function () {
    this.userInfo = this.userName + '  ' + this.astlcode
  },
  activated () {
    this.viewType = this.$route.params.type
    console.log(this.viewType)
    this.userInfo = this.userName + '  ' + this.astlcode
    this.showWrite = true
  },
  deactivated () {
    this.showWrite = false
  },
  methods: {
    goLink (type) {
      if (type === 1) {
      }
    },
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
  .pdf_box_boss {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .linkBtn {
    position: absolute;
    width: 100%;
    height: 20%;
    background: darkblue;
    bottom: 10%;
    left: 0;
  }
  .pdf_box {
    position: relative;
    img {
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
  .zhezhao {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
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
