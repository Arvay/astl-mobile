<template>
  <div class="details_box">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <div style="height: 50px"></div>
    <!-- 图文详情 -->
    <div v-show="detailType === '2'" class="datail_text_img">
      <van-image
        @click="check(CYDSBanner)"
        class="banner"
        fit="cover"
        :src="dataInfo.image"
      />
    </div>
    <!-- 文章详情 -->
    <div class="datail_text">
      <div v-show="detailType === '1'" class="title">
        {{dataInfo.title}}
      </div>
      <div class="name">{{dataInfo.name}}</div>
      <div class="content">
<!--        {{dataInfo.content}}-->
        <span v-for="(item, index) in desc" :key="index">
          {{item}}
          <br />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import BackImg from '@/assets/back_btn.png'
import CYDSBanner from '@/assets/about2.jpg'
import { ImagePreview } from 'vant'
import http from '@/api/http'
import { Api } from '@/api/api'

export default {
  data () {
    return {
      desc: '',
      dataInfo: '',
      detailType: this.$route.params.type,
      backImg: BackImg,
      CYDSBanner: CYDSBanner
    }
  },
  created: function () {
    this.getInfo()
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
    getInfo () {
      let id = this.$route.params.id
      http.get(Api.getActivityDetail + id).then(res => {
        this.desc = res.data.content.replace(/\n/g, '</br>')
        this.desc = this.desc.split('</br>')
        this.dataInfo = res.data
      })
    },
    check (src) {
      ImagePreview ({
        images: [
          src
        ]
      })
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .datail_text_img {
    .banner {
      width: 100%;
      height: 199px;
    }
  }
  .datail_text {
    .content {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #5D422B;
      line-height: 26px;
    }
    .name {
      margin-top: 12px;
      margin-bottom: 17px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #846952;
      line-height: 14px;
    }
  }
  .title {
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #5D422B;
    line-height: 28px;
  }
  .details_box {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
    padding-top: 0;
  }
</style>
