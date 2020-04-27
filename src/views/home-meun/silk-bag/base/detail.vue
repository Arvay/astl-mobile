<template>
  <div class="silkbag_box" @touchmove.prevent @touchmove="touchmove">
    <div class="back" @click="back()">
      <img :src="backImg" alt="">
    </div>
    <div class="iframe_box">
      <iframe class="iframe_2" ref="scrollRef" name="menuFrame" :src="iframeUrl" id="menuFrame" style="overflow:visible;"
              scrolling="auto" frameborder="0" height="100%" width="100%">
      </iframe>
    </div>
    <div class="check_message">
      <img @click="openMessage" :src="HGJNPL" alt="">
    </div>
    <transition name="van-slide-up">
      <div v-show="messageShow" class="message_box">
        <div class="zw">
        </div>
        <div class="comment_box">
          <div class="comment_header">
            <span @click="hidden"><van-icon size="0.5rem" name="cross" /></span>
            <span @click="popupShow">写留言</span>
          </div>
          <div style="height: 40px"></div>
          <div @scroll="scroll" @touchend="touchend" id="scroll_id" class="scrol_box">
            <ul>
              <scroller ref="my_scroller" :on-infinite="infinite" class="scrol_box1">
                <li style="height: 20px"></li>
              <li v-for="(item, index) in contentData" :key="item.id" class="comment_list">
                <div class="user_icon">
                  <img :src="item.avatar" alt="">
                </div>
                <div class="user_info">
                  <div class="user_info_top">
                    <div class="user_info_top_name">{{item.name}}</div>
                    <div class="user_info_top_num">
                      <span>{{item.likecount}}</span>
                      <img @click="zanBtn(index, item.id)" v-show="!item.limit" :src="DZDefeat" alt="">
                      <img @click="noZanBtn" v-show="item.limit" :src="DZClick" alt="">
                    </div>
                  </div>
                  <div class="user_info_bot">
                    <span>{{item.content}}</span>
                    <span style="color: #ffffff">占，位不要删除我投票手，希望大家多，爱你们～</span>
                  </div>
                </div>
              </li>
              <li style="height: 80px"></li>
              </scroller>
            </ul>
          </div>
        </div>
      </div>
    </transition>

    <!--留言-->
    <div class="my-container" v-if="show">
    </div>
    <van-popup round position="bottom" v-model="show" :get-container="getContainer">
      <div>
        <div class="popup_header">
          <div class="popup_back">
            <img @click="popupHidden" :src="BackBtn" alt="">
          </div>
          <span class="popup_name">写留言</span>
          <span @click="saveComment" class="popup_create">提交</span>
        </div>
      </div>
      <van-field
        v-if="show"
        v-model="message"
        rows="5"
        :autosize="{ maxHeight: 100, minHeight: 50 }"
        type="textarea"
        autofocus
        placeholder="请输入留言"
      />
    </van-popup>
    <div>
    </div>
  </div>
</template>
<script>
import BackImg from '@/assets/back_btn.png'
import BackBtn from '@/assets/back_btn03.png'
import DZDefeat from '@/assets/DZ_defeat_03.png'
import DZClick from '@/assets/DZ_click_03.png'
import HGJNPL from '@/assets/HGJN_PL.png'
import http from '@/api/http'
import { Api } from '@/api/api'
import { Notify, Toast } from 'vant'
import wechat from 'weixin-js-sdk'

export default {
  name: 'SilkBagDetail',
  data () {
    return {
      userId: localStorage.getItem('userId2'),
      dataInfo: '',
      HGJNPL: HGJNPL,
      pageNumber: 0,
      totalPages: 1,
      contentData: [],
      messageShow: false,
      iframeUrl: '',
      message: '',
      box: '',
      pos: '',
      BackBtn: BackBtn,
      show: false,
      backImg: BackImg,
      DZDefeat: DZDefeat,
      DZClick: DZClick
    }
  },
  computed: {
  },
  mounted () {
    this.$nextTick(() => {
      // 进入nexTick
      var bady = document.getElementById('scroll_id')
      bady.onscroll = () => {
        // 获取距离顶部的距离
        var scrollTop = bady.scrollTop
        // 获取可视区的高度
        var windowHeight = bady.clientHeight
        // 获取滚动条的总高度
        var scrollHeight = bady.scrollHeight
        // console.log('距顶部' + scrollTop + '可视区高度' + windowHeight + '滚动条总高度' + scrollHeight)
        if (scrollTop + windowHeight >= scrollHeight) {
          // 把距离顶部的距离加上可视区域的高度 等于或者大于滚动条的总高度就是到达底部
          if (this.pageNumber < this.totalPages) {
            this.pageNumber += 1
          } else {
            // Toast('我们都是有底线的~')
            return
          }
          this.getData()
        }
      }
    })
  },
  created: function () {
    this.getData()
    this.getActivityInfo()
  },
  methods: {
    openMessage () {
      this.messageShow = true
    },
    hidden () {
      this.messageShow = false
    },
    /**
     * 上拉获取
     */
    infinite (done) {
      if (this.pageNumber < this.totalPages) {
        this.pageNumber += 1
        this.getData(2, done)
      } else {
        if (this.pageNumber !== 0) {
          Toast('我们都是有底线的~')
        }
      }
    },
    touchmove (event) {
      event.preventDefault()
    },
    noZanBtn () {
      Toast('您已经为此评论点过赞了')
    },
    back () {
      this.$router.push({ path: '/giftbag' })
    },
    zanBtn (index, id) {
      let params = {
        id: id,
        userid: this.userId
      }
      http.post(Api.commentLike, params).then(res => {
        if (res.code === 0) {
          this.contentData[index].likecount += 1
          this.contentData[index].limit = 1
          Toast('点赞成功')
        } else {
          Toast(res.message)
        }
      })
    },
    getContainer () {
      return document.querySelector('.my-container')
    },
    touchend () {
      if (this.pos === 0) {
        this.messageShow = false
      }
    },
    goUnder () {
      this.$nextTick(() => {
        let msg = document.getElementById('scroll_id') // 获取对象
        msg.scrollTop = msg.scrollHeight // 滚动高度
      })
    },
    scroll (event) {
      // let msg = document.getElementById('scroll_id') // 获取对象
      this.pos = event.target.scrollTop
    },
    /*
    * 发表评论
    * */
    saveComment () {
      this.popupHidden()
      if (this.message === '') {
        Toast('请输入留言')
        return
      }
      let params = {
        activityid: this.$route.params.id,
        content: this.message,
        userid: this.userId
      }
      http.post(Api.saveComment, params).then(res => {
        if (res.code === 0) {
          // this.show = false
          this.popupHidden()
          Toast('留言成功')
          this.message = ''
          this.getData(1)
          this.goUnder()
          this.$refs.my_scroller.finishInfinite(true)
        } else {
          Notify(res.message)
        }
        // this.contentData = res.data.content
      })
    },
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    getActivityInfo () {
      var that = this
      let id = this.$route.params.id
      http.get(Api.getActivityDetail + id).then(res => {
        this.iframeUrl = res.data.name
        this.dataInfo = res.data
        wechat.ready(() => {
          wechat.onMenuShareAppMessage({
            title: '诺行合一', // 分享标题
            desc: `合规锦囊《${res.data.title}》`, // 分享描述
            link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
            imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGJN_banner.png', // 分享图标
            success: function () {
              // 用户确认分享后执行的回调函数
              that.watchAdd()
            },
            cancel: function () {
              // 用户取消分享后执行的回调函数
            }
          })
        })
      })
    },
    getData (type, done) {
      let user = localStorage.getItem('userId2')
      let id = this.$route.params.id
      let params = {
        pageNumber: this.pageNumber,
        pageSize: 100,
        userid: user
      }
      http.post(Api.getCommentList + `${id}/${user}`, params).then(res => {
        this.totalPages = res.data.totalPages - 1
        if (type === 1) {
          this.unique(res.data.content)
          return
        }
        for (var x of res.data.content) {
          this.contentData.push(x)
        }
        if (done) {
          done()
        }
      })
    },
    unique (arr) {
      let x = this.contentData
      let y = arr
      for (var k of y) {
        x.push(k)
      }
      const res = new Map()
      this.contentData = x.filter((x) => !res.has(x.id) && res.set(x.id, 1))
    },
    popupShow () {
      this.show = true
    },
    popupHidden () {
      this.show = false
    }
  },
  components: {
    [Toast.name]: Toast
  }
}
</script>
<style scoped lang="scss">
  .my-container {
    width: 100%;
  }
  .scrol_box {
  }
  .scrol_box1 {
    margin-top: 40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .check_message {
    width: 94px;
    font-size: 16px;
    position: fixed;
    bottom: 10px;
    right: 0px;
    z-index: 2;
    img {
      width: 100%;
    }
  }
  .iframe_box {
    width: 100%;
    height: 100%;
  }
  .popup_header {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .popup_back {
      line-height: 31px;
      width: 57px;
    }
    img {
      vertical-align:middle;
      width: 10px;
      height: 16px;
    }
    .popup_name{
      line-height: 31px;
      font-size: 17px;
      color: #656565;
    }
    .popup_create{
      text-align: center;
      line-height: 31px;
      font-size: 16px;
      color: #FFFFFF;
      display: inline-block;
      background: #771011;
      border-radius: 4px;
      width: 57px;
      height: 31px;
    }
  }
  .user_info_bot {
    span {
      margin-top: 10px;
      font-size: 15px;
      color: #333333;
      line-height: 24px;
    }
  }
  .user_info_top {
    display: flex;
    justify-content: space-between;
    .user_info_top_name {
    }
    .user_info_top_num {
      display: flex;
      align-content: center;
      justify-content: flex-end;
      img {
        margin-left: 5px;
        width: 16px;
        height: 16px;
      }
    }
  }
  .user_info {
    div {
      font-size: 14px;
      color: #717171;
      width: 100%;
    }
  }
  .comment_list {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    .user_icon {
      margin-right: 12px;
      width: 33px;
      height: 33px;
      img {
        width: 33px;
        height: 33px;
        border-radius: 4px;
      }
    }
    .user_info {
      width: 100%;
    }
  }
  .message_box {
    height: 70%;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: #ffffff;
  }
  .comment_box {
    position: relative;
    height: 100%;
    .comment_header {
      background: #ffffff;
      z-index: 9;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 17px;
        color: #656565;
      }
      span:nth-child(2) {
        font-size: 15px;
        color: #771011;
      }
    }
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 10px;
  }
  .iframe_2 {
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .silkbag_box {
    background: #ffffff;
  }
  .zw {
    width: 100%;
    height: 10px;
    background: #F7F7F7;
  }
  .content {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 15px;
    padding-top: 0;
    .title {
      font-size: 20px;
      color: #333333;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .message {
      font-size: 14px;
      color: #333333;
      line-height: 26px;
      margin-bottom: 20px;
    }
  }
</style>
