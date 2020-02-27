<template>
  <div id="app">
<!--    <div class="debug">-->
<!--      <p>{{userId}}</p>-->
<!--      <p>{{userName}}</p>-->
<!--      <img width="30px" height="30px" :src="userImg" alt="">-->
<!--    </div>-->
    <router-view class="router"></router-view>
  </div>
</template>
<script>
import defaultSetting from './settings'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'userName',
      'userImg',
      'userId'
    ]),
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
.debug {
  p {
    color: #FEFDF5;
  }
  z-index: 99;
  position: fixed;
  top: 10px;
  right: 10px;
  background:rgba(0,0,0,.4);
  width: 100px;
}
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
