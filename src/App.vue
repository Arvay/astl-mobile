<template>
  <div id="app">
    <router-view class="router"></router-view>
  </div>
</template>
<script>
import defaultSetting from './settings'
export default {
  name: 'app',
  created () {
  },
  computed: {
    transitionName () {
      if (defaultSetting.needPageTrans) {
        return this.$store.state.direction
      }
      return ''
    }
  }
}
</script>

<style lang="scss">
.back {
  z-index: 9;
  position: fixed;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 30px;
  img {
    width: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  background: #FEFDF5;
}

.router {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // background-color: #fff;
}
</style>
