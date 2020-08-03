<template>
  <div class="back-btn" @click="back()">
    <img src="https://astl-2.oss-cn-beijing.aliyuncs.com/astl-2/Back_icon.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    back () {
      this.$emit('change', 'back')
    }
  }
}
</script>

<style scoped>
  .back-btn img {
    position: fixed;
    z-index: 2;
    bottom: 20px;
    left: 20px;
    width: 50px;

  }
</style>
