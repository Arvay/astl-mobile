<template>
  <div class="silkbag_box">
    <div class="back" @click="$router.back()">
      <img :src="backImg" alt="">
    </div>
    <div style="height: 48px"></div>
    <div class="content">
      <div class="title">诺行合一 | 2020年合规周 | 征集令</div>
      <div class="message">、以Business owns compliance为主题，形式不限，可以是随笔、微型小说（500字以内）、诗歌、剧本，歌曲改编，手绘、漫画、摄影作品（1M以上）等等
        p.s. 以图片为主体的稿件，需要配上简短的文字哦～</div>
    </div>
    <div class="zw"></div>
    <div class="comment_box">
      <div class="comment_header">
        <span>全部留言</span>
        <span @click="popupShow">写留言</span>
      </div>
      <ul>
        <li class="comment_list">
          <div class="user_icon">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="">
          </div>
          <div class="user_info">
            <div class="user_info_top">
              <div class="user_info_top_name">陈威</div>
              <div class="user_info_top_num">
<!--                <img :src="DZDefeat" alt="">-->
                <img :src="DZClick" alt="">
                <span>566</span>
              </div>
            </div>
            <div class="user_info_bot">
              <span>2020年合规周的节目策划真的太有心了，我参与了《合规创意大赛》，编号004选手，希望大家多给我投票，爱你们～</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--留言-->
    <van-popup v-model="show"
               @close="popupClose"
               round
               position="bottom"
               :style="{ height: '30%' }">
      <div>
        <div class="popup_header">
          <div class="popup_back">
            <img @click="popupHidden" :src="BackBtn" alt="">
          </div>
          <span class="popup_name">写留言</span>
          <span class="popup_create">提交</span>
        </div>
      </div>
      <van-field
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
export default {
  name: 'silk_bag',
  data () {
    return {
      message: '',
      BackBtn: BackBtn,
      show: false,
      backImg: BackImg,
      DZDefeat: DZDefeat,
      DZClick: DZClick
    }
  },
  created: function () {
  },
  methods: {
    popupClose () {
      this.message = ''
    },
    popupShow () {
      this.show = true
    },
    popupHidden () {
      this.show = false
      this.message = ''
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
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
        margin-right: 5px;
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
    margin-bottom: 20px;
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
  .comment_box {
    .comment_header {
      margin-bottom: 30px;
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
    padding: 20px 10px;
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
