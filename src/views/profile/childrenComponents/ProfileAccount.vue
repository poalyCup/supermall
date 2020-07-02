<template>
  <div class="account">
    <div class="account-item">
      <img src="~assets/img/profile/coupon.svg" alt="优惠卷">
      <span>我的优惠卷</span>
    </div>
    <div class="account-item">
      <img src="~assets/img/profile/vip.svg" alt="会员">
      <span>我的会员</span>
    </div>
    <div class="account-item">
      <img src="~assets/img/profile/afterSale.svg" alt="售后">
      <span>售后服务</span>
    </div>
    <div class="account-item">
      <img src="~assets/img/profile/more.svg" alt="更多">
      <span>更多</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProfileAccount'
  }
</script>

<style scoped>
  .account{
    text-align: left;
  }
  .account-item{
    position: relative;
    height: 40px;
  }
  .account-item img{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .account-item span{
    display: block;
    font-size: 15px;
    margin-left: 40px;
    padding-left: 3px;
    line-height: 40px;
    border-bottom: 1px solid rgba(200, 200, 200, .3);
  }
</style>