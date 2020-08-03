<template>
  <div class="container">
    <div class="back" @click="goBack">
      <img :src="backImg" alt="">
    </div>
    <div class="HGSCTop">
      <img :src="HGSCTop" alt="">
    </div>
    <div class="title">
      <img :src="HGSCTilte" alt="">
    </div>
    <div class="main_box">
      <div class="main">
        <div class="main_scrol" style="position: relative">
          <scroller>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人确认已收到并充分学习新版《合规手册》，阅读并理解了手册中的各项合规相关要求与公司期望。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在此郑重承诺，本人将严格遵守适用的法律、法规、行业准则以及安斯泰来集团和安斯泰来中国的相关合规政策，包括但不限于《安斯泰来集团行为准则》、《安斯泰来集团反贿赂与反腐败合规政策》、《安斯泰来集团利益冲突政策》、《全球数据隐私政策》、《安斯泰来外部互动准则以及流程》、《聘用医疗卫生专业人士服务管理规定》、《安斯泰来制药（中国）有限公司隐私数据保护规范》、《安斯泰来（中国）合规信用计分规则》及公司其他相关规定。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果本人有任何合规问题，将主动联系直线经理以及道德与合规部，寻求建议或帮助。如果本人知晓或怀疑任何违反上述公司规定或者其他违反法律、道德规范或商业规范的行为，必须根据问题的性质，及时通过相关部门或通过EthicsPoint热线如实上报。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，如作为团队经理/主管，本人有责任及义务对下属员工给予适当地培训，并履行指导、审核与监督职责，以确保下属员工同样遵守法律、法规、行业准则及公司的合规政策和规章制度。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本人充分知悉并同意，若本人或下属员工有任何违反上述要求的行为，公司将根据适用的法律和政策作出纪律处分决定，情节严重的，公司有权解除劳动合同。</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p style="text-align: center;font-size: 16px">Compliance Acknowledgement</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>I have received & reviewed the new Compliance Handbook. I have read and fully understood the provisions of respective compliance requirement as well as Company’s expectation.</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>I hereby acknowledge that I will strictly comply with relevant laws & regulations, industrial code of practice as well as the global and ACN policies, including but not limited to Astellas Group Code of Conduct, Astellas Group Policy on Anti-bribery and Anti-corruption Compliance, Astellas Group Conflicts of Interest Policy, Global Data Privacy Policy, ACN External Interaction Rules and SOP, Regulations for the Management of Engaging Health Care Professionals for Services, ACN Data Privacy Guideline, ACN Compliance Credit Scoring Rules and other relevant company regulations. </p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>I would proactively contact my Line Manager and/or Ethics & Compliance Department for help and advice in case of any question related to compliance requirement. If I know or suspect any violation against the above-mentioned company policies or other illegal or unethical behavior or business practice, I must promptly report to my Line Manager and/or appropriate departments such as Ethics & Compliance, Legal, or Human Resources (depending on the nature of the issue) or via EthicsPoint in a truthful manner.</p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>In addition, as a Line Manager / Supervisor, I have the responsibility and duty to deliver training on compliance policies and regulations to my subordinates. I shall ensure that my subordinates would comply with relevant laws and regulations, industrial code of practice as well as Company’s compliance policies and regulations by providing guidance, monitoring and supervision.  </p>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>In case of any violation of the above statement by myself or my subordinates, I agree that I would be subject to disciplinary actions taken by the Company in accordance with the relevant laws and regulations. And for serious violations, the Company has the right to terminate my labor contract.</p>
          </scroller>
        </div>
      </div>
    </div>
    <div class="check_view_btn">
      <img v-show="isCheck" @click="isPromiseImg=true" :src="HGSCCKBtn" alt="">
      <img v-show="!show1 && !isCheck" @click="toast()" :src="HGSCQZBtn2" alt=""> <!--少侠请确认不可点击-->
      <img v-show="show1 && !isCheck" @click="showQ_z" :src="HGSCQZBtn3" alt=""> <!--少侠请确认可点击-->
    </div>
    <div class="language_tab">
      <img @click="goPdf(1)" src="https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGSC_Chinese_btn.png" alt="">
      <img @click="goPdf(2)" src="https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HGSC_english_btn.png" alt="">
    </div>
    <!-- 签字面板 -->
    <van-popup v-model="show"
               round
               position="bottom"
               :style="{ height: '30%' }">
      <Write v-if="show" v-on:trigger="trigger"></Write>
    </van-popup>
    <!--承诺书-->
    <Promise v-on:base64succeed="succeed" :base64="base64" v-show="promiseShow"></Promise>
    <!-- 显示签署文件 -->
    <div v-show="isPromiseImg" class="promise_box">
      <div class="btn">
        <van-button plain size="small" type="info" @click="deleteImg">重新签署</van-button>
      </div>
      <scroller>
        <img :src="promiseImg" alt="">
      </scroller>
    </div>
  </div>
</template>
<script>
import Write from './base/write'
import Promise from './base/promise'
import HGSCTilte from '@/assets/HGSC_tilte.png'
import BackImg from '@/assets/back_btn.png'
import HGSCTop from '@/assets/HGSC_top_img.png'
import HGSCCKBtn from '@/assets/HGSC_CK_btn.png' // 查看
import HGSCQZBtn2 from '@/assets/HGSC_QZ_unuse.png' // 少侠请确认
import HGSCQZBtn3 from '@/assets/HGSC_QZ_btn.png' // 少侠请确认
import HGSCChineseBtn from '@/assets/HGSC_Chinese_btn.png' // 中文切换
import HGSCEnglishBtn from '@/assets/HGSC_english_btn.png' // 英文切换
import http from '@/api/http'
import { Api } from '@/api/api'
import { Toast, Notify, Dialog } from 'vant'
import wechat from 'weixin-js-sdk'
export default {
  name: 'FooterTabbar',
  data () {
    return {
      promiseId: '',
      isPromiseImg: false,
      promiseShow: false,
      promiseImg: '',
      isCheck: false,
      timeOk: false,
      base64: '',
      show: false,
      show1: false,
      HGSCTilte: HGSCTilte,
      backImg: BackImg,
      HGSCTop: HGSCTop,
      HGSCCKBtn: HGSCCKBtn,
      HGSCQZBtn3: HGSCQZBtn3,
      HGSCChineseBtn: HGSCChineseBtn,
      HGSCEnglishBtn: HGSCEnglishBtn,
      HGSCQZBtn2: HGSCQZBtn2
    }
  },
  mounted () {
    this.timeOk = localStorage.getItem('timeOk')
    this.show1 = localStorage.getItem('show1')
    var that = this
    wechat.ready(() => {
      wechat.onMenuShareAppMessage({
        title: '诺行合一', // 分享标题
        desc: '贰零贰零年 合规手册', // 分享描述
        link: window.location.href, // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
        imgUrl: 'https://astl.oss-cn-beijing.aliyuncs.com/h5/wx/HOME_banner.png', // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
          that.watchAdd()
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  },
  activated () {
    this.getUserPromise()
  },
  deactivated () {
    this.isPromiseImg = false
  },
  created () {
    this.getUserPromise()
  },
  methods: {
    deleteImg () {
      http.get(Api.activityDelete + this.promiseId).then(res => {
        if (res.code === 0) {
          this.getUserPromise()
          this.isPromiseImg = false
          this.isCheck = false
        } else {
          Notify({
            message: '系统错误 请重新尝试',
            duration: 5000
          })
        }
      })
    },
    watchAdd () {
      let params = {
        userid: localStorage.getItem('userId')
      }
      http.post(Api.watchAdd, params).then(res => {
      })
    },
    getUserPromise () {
      let params = {
        userid: localStorage.getItem('userId2')
      }
      http.post(Api.getUserPromise, params).then(res => {
        if (res.data) {
          this.promiseId = res.data.id
          this.promiseImg = res.data.image
          this.isCheck = true
        }
      })
    },
    succeed (item) {
      if (item.code !== 0) {
        Notify({
          message: '上传文件出现错误，请重新签署',
          duration: 5000
        })
      } else {
        this.promiseShow = false
        this.isPromiseImg = true
        this.getUserPromise()
        Dialog.alert({
          message: '请确认签署文件内容是否正确，如有异常请点击重新签署'
        }).then(() => {
        })
        this.isCheck = true
      }
    },
    goBack () {
      if (this.promiseShow) {
        this.promiseShow = false
      } else if (this.isPromiseImg) {
        this.isPromiseImg = false
      } else {
        this.$router.push({ path: '/' })
      }
    },
    trigger (item) {
      this.show = false
      this.promiseShow = true
      this.base64 = item
    },
    showQ_z () {
      if (this.timeOk) {
        Dialog.confirm({
          title: '提示',
          width: '330px',
          message: '请在签字前确认您已阅读并理解新版合规手册<br /><br /><strong style="color: #000000">Reminder</strong><br />Please ensure you have read and understood the requirements set forth in the Compliance Handbook before certification.'
        }).then(() => {
          this.show = true
        })
      } else {
        Toast('您需阅读合规手册大于30s')
      }
    },
    toast () {
      Toast('暂不能签字，请先阅读合规手册')
    },
    goPdf (type) {
      this.$router.push({ path: '/checkpdf/' + type })
      setTimeout(() => {
        this.timeOk = true
        localStorage.setItem('timeOk', true)
      }, 30000)
      this.show1 = true
      localStorage.setItem('show1', true)
    }
  },
  components: {
    Write,
    Promise
  }
}
</script>
<style lang="scss" scoped>
  .delete {
    position: fixed;
    top: 0;
    right: 0;
  }
  .btn {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 99;
  }
  .promise_box {
    /*position: fixed;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*overflow: scroll;*/
    z-index: 9;
    img {
      width: 100%;
    }
  }
  .main_scrol {
    width: 300px;
    height: 350px;
    overflow: scroll;
  }
  .van-popup {
    background: #FEFDF5 !important;
  }
  .test {
    background: white;
    position: fixed;
    z-index: 2;
    top: 0;
  }
  .language_tab {
    margin-top: 14px;
    text-align: right;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;padding-right: 10px;
    img {
      margin-right: 10px;
      width: 127px;
      height: 40px;
    }
  }
  .check_view_btn {
    width: 100%;
    margin-top: 14px;
    text-align: right;
    img {
      margin-right: 20px;
      width: 264px;
      height: 40px;
    }
  }
  .main_box {
    /*margin-top: 10px;*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 10px;
  }
  .main {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 26px 27px 26px 27px;
    width: 355px;
    height: 390px;
    background-image: url('~@/assets/HGSC_JZ_bg.png');
    background-size: 100% 100%;
    p {
      line-height: 28px;
      margin: 0;
      color: #5D422B;
      font-size: 14px;
      font-family: PingFangSC-Regular;
    }
  }
  .title {
    margin-top: 20px;
    width: 100%;
    text-align: center;
    img {
      width: 198px;
    }
  }
  .HGSCTop {
    width: 124px;
    height: 103px;
    position: absolute;
    right: 0;
    top: 0;
    img {
      width: 100%;
    }
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('~@/assets/home-banner.png');
    background-size: 100% 100%;
  }
</style>
