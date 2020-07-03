<template>
  <nav-bar class="category-nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'CategoryNavBar',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .category-nav-bar{
    position: fixed;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    height: 44px;
    line-height: 44px;
    background-color: rgb(251,242,227);
    font-size: 14px;
  }
</style>