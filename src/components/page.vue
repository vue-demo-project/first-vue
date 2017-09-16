<template>
	<div class="page">
		<div class="btn1" @click="page1">第一页</div>
		<div class="btn2" @click="page2">第二页</div>
	</div>
</template>

<script>
	export default {
    data () {
      return {
        
      }
    },
    methods: {
      page1: function () {
        this.$router.push({path: '/page1'})
      },
      page2: function () {
        this.$router.push({path: '/page2'})
      }
    }
  }
</script>
	
<style>
	.page{width: 800px;height: 600px;background: thistle;}
	.page>div{float: left;margin-left: 30px;text-align: center;width: 100px;height: 30px;line-height: 30px;background: #fff;}
</style>