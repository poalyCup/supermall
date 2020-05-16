<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="left-item">
        <img src="~assets/img/detail/service.svg" class="pink" alt="">
        <p>客服</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/shop.svg" alt="">
        <p>店铺</p>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/collect.svg" alt="">
        <p>收藏</p>
      </div>
    </div>
    <div class="bar-right">
      <div class="add-cart">
        加入购物车
      </div>
      <div class="buy">
        购买
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'DetailBottomBar'
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 49px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .bar-left, .bar-right{
    flex: 1;
    display: flex;
  }
  .left-item{
    flex: 1;
    font-size: 14px;
    color: #666;
  }
  .left-item img{ 
    width: 25px;
    display: inline-block;
  }

  .add-cart, .buy{
    flex: 1;
    line-height: 49px;
    font-size: 15px;
    color: #fff;
    width: 100%;
  }
  .add-cart{
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    background-color: #f69;
  }
</style>