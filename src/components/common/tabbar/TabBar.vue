<template>
  <div class="tab-bar">
      <!-- <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.svg"/>
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/shop.svg"/>
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/cart.svg"/>
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/profile.svg"/>
        <div>我的</div>
      </div> -->

      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
  /* css导入方式 */
  /* @import "../../assets/css/base.css"; */
  .tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed; 
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.1);
  }

  /* .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    height: 26px;
    height: 26px;
    vertical-align: middle;
    margin-top: 3px;
  } */
</style>