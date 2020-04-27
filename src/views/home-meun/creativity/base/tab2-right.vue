<template>
    <div>
      <div class="back" @click="back()">
        <img :src="backImg" alt="">
      </div>
      <scroller ref="res2">
      <img class="banner" :src="CYDSBanner2" alt="">
      <div class="main">
        <ul class="tab">
          <li :style="backgroundDiv2" @click="setTabIndex()">
            群雄争霸
          </li>
          <li :style="backgroundDiv">
            人中豪杰
          </li>
        </ul>
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
      </div>
  </scroller>
      <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <van-loading color="#1989fa" size="44px"></van-loading>
        </div>
      </van-overlay>
    </div>
</template>

<script>
import TPDefeat from '@/assets/TP_defeat.png'
import TPCLick from '@/assets/TP_CLick.png'
import CYDSBanner2 from '@/assets/CYDS_banner.png'
import CYDSBanner from '@/assets/about2.jpg'
import BackImg from '@/assets/back_btn.png'
import http from '@/api/http'
import CYHGCheckBtn from '@/assets/CYHG_check_btn.png'
import CYHGDefeatBtn from '@/assets/CYHG_defeat_btn.png'
import { Api } from '@/api/api'
import { Toast } from 'vant'
import wechat from "weixin-js-sdk";

export default {
  name: 'cccccc',
  data () {
    return {
      userId: localStorage.getItem('userId2'),
      show: true,
      scrollTop: 0,
      listDate: '',
      backImg: BackImg,
      TPDefeat: TPDefeat,
      TPCLick: TPCLick,
      CYDSBanner: CYDSBanner,
      CYDSBanner2: CYDSBanner2,
      backgroundDiv: {
        backgroundImage: 'url(' + CYHGCheckBtn + ')'
      },
      backgroundDiv2: {
        backgroundImage: 'url(' + CYHGDefeatBtn + ')'
      }

    }
  },
  mounted () {
    var that = this
    this.showLeft = this.tabIndex
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规创意大赛列表', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/CYDS_banner.png', // 分享图标
        success: function () {
          that.watchAdd()
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  },
  filters: {
    namedddd (item) {
      if (item) {
        item = item.split('$分割$')[0]
      }
      return item
    }
  },
  created: function () {
    this.getList()
  },
  activated () {
    setTimeout(() => {
      this.$refs.res2.scrollTo(0, this.scrollTop, true)
    }, 10)
    setTimeout(() => {
      this.show = false
    }, 500)
  },
  deactivated () {
    this.scrollTop = this.$refs.res2.getPosition().top
    this.show = true
  },
  methods: {
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    back () {
      this.$router.push({ path: '/' })
    },
    setTabIndex () {
      this.$router.push({ path: '/creativity' })
    },
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
      let user = localStorage.getItem('userId2')
      http.get(Api.getActivityList + `2/${user}`).then(res => {
        this.listDate = res.data
      })
    },
    goDetail (type, id) {
      this.$router.push({ path: `/creativityDetails/${type}/${id}/2` })
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
