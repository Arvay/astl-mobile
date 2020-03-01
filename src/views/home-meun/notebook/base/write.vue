<template>
  <div>
    <div class="header">
      <div @click="handleReset" class="clear">清除</div>
      <div @click="handleGenerate" class="create">提交</div>
      <span>少侠请签字</span>
    </div>
    <div>
      <vue-esign ref="esign" :width="800" :height="320" :isCrop="isCrop" :lineWidth="lineWidth" :lineColor="lineColor" :bgColor.sync="bgColor" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lineWidth: 6,
      lineColor: '#000000',
      bgColor: '',
      isCrop: false
    }
  },
  created: function () {
  },
  methods: {
    handleReset () {
      this.$refs.esign.reset()
    },
    handleGenerate () {
      this.$refs.esign.generate().then(res => {
        this.$emit('trigger', res)
      }).catch(err => {
        // 画布没有签字时会执行这里 'Not Signned'
        console.log(err)
      })
    }
  },
  components: {
  }
}
</script>
<style scoped lang="scss">
  .header {
    margin-top: 10px;
    margin-bottom: 4px;
    width: 100%;
    position: relative;
    text-align: center;
    .clear {
      position: absolute;
      left: 10px;
      top: 0;
      background: #B0947C;
      border-radius: 4px;
    }
    .create {
      position: absolute;
      right: 10px;
      top: 0;
      background: #771011;
      border-radius: 4px;
    }
    div {
      color: #ffffff;
      font-size: 16px;
      line-height: 31px;
      width: 57px;
      text-align: center;
    }
    span {
      font-size: 16px;
      color: #656565;
      line-height: 32px;
    }
  }
</style>
