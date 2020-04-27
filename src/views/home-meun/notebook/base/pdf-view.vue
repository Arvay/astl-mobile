<template>
  <div class="pdf_box_boss">
    <div class="back" style="z-index: 999999" @click="back">
      <img :src="backImg" alt="">
    </div>
    <scroller>
      <div v-show="viewType === '2'" class="pdf_box" style="text-align: center">
        <div class="zhezhao">
        </div>
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E1.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E5.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E6.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E7.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E8.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E9.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E10.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E11.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E12.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E13.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E14.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E15.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E16.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E17.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E18.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E19.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E20.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E21.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E22.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E23.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E24.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E25.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E26.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E27.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E28.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E29.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E30.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E31.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E32.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E33.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E34.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E35.jpg" alt="">
        <img src="https://astl.oss-cn-beijing.aliyuncs.com/h5/pdfE/E36.jpg" alt="">
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
