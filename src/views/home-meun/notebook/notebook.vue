<template>
  <div class="container">
    <div class="back" @click="$router.back()">
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
        <div class="main_scrol">
          <p>&nbsp;&nbsp;&nbsp;本人确认已收到并充分学习新版《合规手册》，阅读并理解了手册中的各项合规相关要求与公司期望</p>
          <p>&nbsp;&nbsp;&nbsp;在此郑重承诺，本人将严格遵守适用的法律、法规、行业准则以及安斯泰来集团和安斯泰来中国的相关合规政策，包括但不限于《安斯泰来集团行为准则》、《安斯泰来集团反贿赂与反腐败合规政策》、《安斯泰来集团利益冲突政策》、《全球数据隐私政策》、《安斯泰来外部互动准则以及流程》、《聘用医疗卫生专业人士服务管理规定》、《安斯泰来制药（中国）有限公司隐私数据保护规范》、《安斯泰来（中国）合规信用计分规则》及公司其他相关规定。</p>
          <p>&nbsp;&nbsp;&nbsp;如果本人有任何合规问题，将主动联系直线经理以及道德与合规部，寻求建议或帮助。如果本人知晓或怀疑任何违反上述公司规定或者其他违反法律、道德规范或商业规范的行为，必须根据问题的性质，及时通过相关部门或通过EthicsPoint热线如实上报。</p>
          <p>&nbsp;&nbsp;&nbsp;此外，如作为团队经理/主管，本人有责任及义务对下属员工给予适当地培训，并履行指导、审核与监督职责，以确保下属员工同样遵守法律、法规、行业准则及公司的合规政策和规章制度。</p>
          <p>&nbsp;&nbsp;&nbsp;本人充分知悉并同意，若本人或下属员工有任何违反上述要求的行为，公司将根据适用的法律和政策作出纪律处分决定，情节严重的，公司有权解除劳动合同。</p>
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
        </div>
      </div>
    </div>
    <div class="check_view_btn">
<!--      <img :src="HGSCCKBtn" alt="">-->
      <img @click="show=true" :src="HGSCQZBtn2" alt="">
    </div>
    <div class="language_tab">
      <img @click="goPdf(1)" :src="HGSCChineseBtn" alt="">
      <img @click="goPdf(2)" :src="HGSCEnglishBtn" alt="">
    </div>
    <!-- 签字面板 -->
    <van-popup v-model="show"
               round
               position="bottom"
               :style="{ height: '30%' }">
      <Write></Write>
    </van-popup>
  </div>
</template>
<script>
import Write from './base/write'
import HGSCTilte from '@/assets/HGSC_tilte.png'
import BackImg from '@/assets/back_btn.png'
import HGSCTop from '@/assets/HGSC_top_img.png'
import HGSCCKBtn from '@/assets/HGSC_CK_btn.png' // 查看
import HGSCQZBtn2 from '@/assets/HGSC_QZ_btn2.png' // 少侠请确认
import HGSCChineseBtn from '@/assets/HGSC_Chinese_btn.png' // 中文切换
import HGSCEnglishBtn from '@/assets/HGSC_english_btn.png' // 英文切换
export default {
  name: 'FooterTabbar',
  data () {
    return {
      show: false,
      HGSCTilte: HGSCTilte,
      backImg: BackImg,
      HGSCTop: HGSCTop,
      HGSCCKBtn: HGSCCKBtn,
      HGSCChineseBtn: HGSCChineseBtn,
      HGSCEnglishBtn: HGSCEnglishBtn,
      HGSCQZBtn2: HGSCQZBtn2
    }
  },
  methods: {
    goPdf (type) {
      this.$router.push({ path: '/checkpdf/' + type })
    }
  },
  components: {
    Write
  }
}
</script>
<style lang="scss" scoped>
  .main_scrol {
    width: 300px;
    height: 380px;
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
    margin-top: 16px;
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
    height: 430px;
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
    margin-top: 50px;
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
    overflow: hidden;
    background: url('~@/assets/home-banner.png');
    background-size: 100% 100%;
  }
</style>
