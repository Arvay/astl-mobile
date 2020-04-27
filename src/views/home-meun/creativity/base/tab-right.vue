<template>
  <div class="box_box">
    <div v-for="(item, index) in listDate" :key="item.id">
      <div v-if="item.image===''" class="text van-hairline--bottom">
        <div @click="goDetail(1, item.id)">
          <p class="van-ellipsis title">{{item.title}}</p>
          <div class="info">
            <span class="num">&nbsp;作品：{{index+1}}&nbsp;</span>
            <span class="name">{{item.name | namedddd}}</span>
            <span class="name score">票数：{{item.votecount}}</span>
          </div>
          <div class="vote_btn">
            <img v-show="item.limit2===0" @click.stop="setVote(item.id)" :src="TPDefeat" alt=""> <!--未投-->
            <img v-show="item.limit2===1" :src="TPCLick" alt=""> <!--已投-->
          </div>
        </div>
      </div>
      <!--第二种形态-->
      <div v-if="item.image!==''" class="img_text van-hairline--bottom">
        <div @click="goDetail(2, item.id)">
          <van-image
            class="banner"
            fit="cover"
            :src="item.image"
          />
          <div class="info">
            <span class="num">&nbsp;作品：{{index+1}}&nbsp;</span>
            <span class="name">{{item.name | namedddd}}</span>
            <span class="name score">票数：{{item.votecount}}</span>
            <div class="vote_btn">
              <img v-show="item.limit2===0" @click.stop="setVote(item.id)" :src="TPDefeat" alt=""> <!--未投-->
              <img v-show="item.limit2===1" :src="TPCLick" alt=""> <!--已投-->
            </div>
          </div>
        </div>
        <div style="height: 15px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TPDefeat from '@/assets/TP_defeat.png'
import TPCLick from '@/assets/TP_CLick.png'
import CYDSBanner from '@/assets/about2.jpg'
import http from '@/api/http'
import { Api } from '@/api/api'
import { Toast } from 'vant'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      listDate: '',
      TPDefeat: TPDefeat,
      TPCLick: TPCLick,
      CYDSBanner: CYDSBanner
    }
  },
  filters: {
    namedddd (item) {
      if (item) {
        item = item.split('$分割$')[0]
      }
      return item
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
    test () {
    },
    getList () {
      let user = localStorage.getItem('userId')
      http.get(Api.getActivityList + `2/${user}`).then(res => {
        this.listDate = res.data
      })
    },
    goDetail (type, id) {
      this.$router.push({ path: `/creativityDetails/${type}/${id}` })
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .img_text {
    margin-top: 15px;
    .banner {
      width: 100%;
      height: 199px;
    }
    .info {
      line-height: 45px;
      position: relative;
      .score {
        color: #846952;
        font-size: 12px;
      }
      .vote_btn {
        top: -1px;
      }
    }
  }
  .vote_btn {
    position: absolute;
    top: 2px;
    right: 0;
    width: 45px;
    height: 45px;
    img {
      height: 45px;
      width: 45px;
    }
  }
  .info {
    margin: 0;
    margin-top: 5px;
    .num {
      display: inline-block;
      border-radius: 2px;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      color: #ffffff;
      background: #771011;
      margin-bottom: 15px;
    }
    .name {
      margin-left: 4px;
      color: #846952;
      font-size: 14px;
      line-height: 20px;
    }
    .score {
      margin-left: 20px;
    }
  }
  .box_box {
    .text {
      position: relative;
      margin-top: 15px;
      .title {
        width: 289px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #5D422B;
      }
    }
  }
</style>
