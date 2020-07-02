<template>
  <div class="order">
    <div class="order-top">
      <span class="order-title">我的订单</span>
      <!-- <span class="">全部订单</span> -->
      <div class="order-more">全部订单<i class="arrow-right"></i></div>
    </div>
    <div class="order-bottom">
      <div class="order-item">
        <img src="~assets/img/profile/vipcard.svg" alt="假装有图片"> 待付款</div>
      <div class="order-item">
        <img src="~assets/img/profile/send.svg" alt="假装有图片"> 待发货</div>
      <div class="order-item">
        <img src="~assets/img/profile/deliver.svg" alt="假装有图片"> 待收货</div>
      <div class="order-item">
        <img src="~assets/img/profile/comment.svg" alt="假装有图片"> 待评价</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileUserOrder'
  }
</script>

<style scoped>
  .order{
    width: 100%;
    background-color: #fff;
    border-bottom: rgba(200, 200, 200, .2) 15px solid;
  }
  .order-top{
    height: 30px;
  }
  .order-title{
    float: left;
    padding: 5px 5px;
    font-weight: bold;

  }
  .order-more{
    padding: 5px 5px;
    float: right;
    font-size: 14px;
    padding-right: 15px;
  }
  .arrow-right{
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    width: 9px;
    height: 9px;
    background-color: transparent;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    display: inline-block;
    margin-left: .1rem;
  }


  .order-bottom{
    padding: 10px 0;
    border-top: 1px solid rgba(200, 200, 200, .3);
    display: flex;
  }
  .order-item{
    flex: 1;
    font-size: 14px;
    padding: 0 10px;
  }
  .order-item img{
    font: 12px;
    display: block;
    width: 30px;
    height: 30px;
    margin: 5px auto;
  }
</style>