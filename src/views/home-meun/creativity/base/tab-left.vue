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
          <p class="score">票数：{{item.votecount}}</p>
          <div class="vote_btn">
            <img v-show="item.limit2===0" @click="setVote(item.id)" :src="TPDefeat" alt=""> <!--未投-->
            <img v-show="item.limit2===1" :src="TPCLick" alt=""> <!--已投-->
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ImagePreview, Toast } from 'vant'
import CYDSBanner from '@/assets/CYDS_banner.png'
import TPDefeat from '@/assets/TP_defeat.png'
import TPCLick from '@/assets/TP_CLick.png'
import CYDSBanner2 from '@/assets/about2.jpg'
import http from '@/api/http'
import { Api } from '@/api/api'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showBtn: false,
      CYDSBanner2: CYDSBanner2,
      CYDSBanner: CYDSBanner,
      TPDefeat: TPDefeat,
      TPCLick: TPCLick,
      listDate: ''
    }
  },
  computed: {
    ...mapGetters([
      'userId'
    ])
  },
  created: function () {
    this.getList()
  },
  methods: {
    setVote (id) {
      this.showBtn = true
      let params = {
        id: id,
        userid: this.userId
      }
      http.post(Api.vote, params).then(res => {
        if (res.code === 0) {
          Toast('投票成功')
          this.getList()
        } else {
          Toast(res.message)
        }
      })
    },
    getList () {
      let user = localStorage.getItem('userId')
      http.get(Api.getActivityList + `1/${user}`).then(res => {
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
  components: {
    [Toast.name]: Toast,
    [ImagePreview.name]: ImagePreview
  }
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
    display: -webkit-flex;
    display: -moz-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    justify-content: space-between;
    -webkit-justify-content: space-between;
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
