<template>
  <div class="container">
    <HomeMain></HomeMain>
  </div>
</template>

<script>
import HomeMain from 'components/HomeMain'

export default {
  name: 'home',
  data () {
    return {
      value: 1
    }
  },
  components: {
    HomeMain
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>
