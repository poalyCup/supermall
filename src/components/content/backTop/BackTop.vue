<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style scoped>
  .back-top{
    width: 46px;
    height: 46px;
    position: fixed;
    right: 15px;
    bottom: 48px;
    z-index: 9;
  }

  .back-top img{
    width: 100%;
  }
</style>