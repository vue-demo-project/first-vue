<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  created: function () {
      this.$router.push({path: '/page'})
  }
}
</script>

<style>

</style>
