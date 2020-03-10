<template>
  <div class="game_box">
    <iframe class="iframe_2" ref="scrollRef" name="menuFrame" :src="iframeUrl" id="menuFrame" style="overflow:visible;"
            scrolling="auto" frameborder="0" height="100%" width="100%">
    </iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iframeUrl: 'http://dt.wayhuh5.top/qywxkupaodati_kh_alk/index.php/index/index/index.html'
    }
  },
  created: function () {
  },
  methods: {},
  components: {}
}
</script>
<style scoped lang="scss">
  .game_box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
