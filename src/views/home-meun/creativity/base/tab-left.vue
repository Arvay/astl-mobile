<template>
  <div>
    <ul class="list">
      <li v-for="item in listDate" :key="item.id">
        <van-image
          @click="goDetail(item.image)"
          width="170px"
          height="170px"
          radius="4px"
          fit="cover"
          :src="item.image"
        />
        <div class="info">
          <p>
            <span class="num">排名：1</span>
            <span class="name">{{item.name}}</span>
          </p>
          <p class="score">票数：333</p>
          <div class="vote_btn">
            <img :src="TPDefeat" alt=""> <!--未投-->
            <!--              <img :src="TPCLick" alt=""> &lt;!&ndash;已投&ndash;&gt;-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import CYDSBanner from '@/assets/CYDS_banner.png'
import TPDefeat from '@/assets/TP_defeat.png'
import TPCLick from '@/assets/TP_CLick.png'
import CYDSBanner2 from '@/assets/about2.jpg'
import http from '@/api/http'
import { Api } from '@/api/api'
export default {
  data () {
    return {
      CYDSBanner2: CYDSBanner2,
      CYDSBanner: CYDSBanner,
      TPDefeat: TPDefeat,
      TPCLick: TPCLick,
      listDate: ''
    }
  },
  created: function () {
    this.getList()
  },
  methods: {
    getList () {
      http.get(Api.getActivityList + '1').then(res => {
        this.listDate = res.data
      })
    },
    goDetail (src) {
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
  .info {
    position: relative;
    margin-top: 5px;
    .vote_btn {
      position: absolute;
      top: -6px;
      right: 0;
      width: 45px;
      height: 45px;
      img {
        height: 45px;
        width: 45px;
      }
    }
    p {
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
      }
      .name {
        margin-left: 4px;
        color: #846952;
        font-size: 14px;
        line-height: 16px;
      }
    }
    .score {
      margin-top: 10px;
      font-size: 12px;
      color: #846952;
    }
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      margin-bottom: 16px;
      width: 170px;
      img {
        border-radius: 4px;
        width: 170px;
        height: 170px;
      }
    }
  }
</style>
