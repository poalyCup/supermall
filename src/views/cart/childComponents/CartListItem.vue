<template>
  <div class="cart-list-item">
    <div class="item-img">
      <img :src="item.imageUrl" alt="">
    </div>
    <div class="item-info">
      <p class="info-title">{{item.title}}</p>
      <p class="info-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .cart-list-item{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    height: 120px;
    padding: 5px;
    width: 100%;
    display: flex;
  }
  .item-img, .item-info{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img{
    width: 80px;
    padding: 5px;
  }
  .item-img img{
    display: block;
    height: 100px;
    border-radius: 5px;
  }
  .item-info{
    padding: 5px 10px;
    /* 用相对布局解决flex布局下不等分需要设置宽度的问题 */
    position: relative;
  }
  .item-info p{
    text-overflow: ellipsis;
  }
  .info-title{
    color: #333;
    font-size: 17px;
    font-weight: 500;
  }
  .info-desc{
  }
</style>