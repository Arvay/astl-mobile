<template>
  <div class="video_box">
    <van-overlay :show="true" @click="hidden">
      <div class="wrapper">
        <div class="block" @click.stop>
          <video width="100%" height="100%" :src="url" type="application/vnd.apple.mpegurl" controls="controls" playsinline="true"
                 webkit-playsinline="true" preload x-webkit-airplay="true" x5-playsinline="">
            您的浏览器不支持Video标签。
          </video>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: 'VideoBox',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created: function () {
  },
  methods: {
    hidden () {
      this.$emit('change', '关闭')
    }
  },
  components: {}
}
</script>
<style scoped lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 100%;
    height: 240px;
  }
</style>
