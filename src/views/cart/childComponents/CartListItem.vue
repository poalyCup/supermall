<template>
  <div class="cart-list-item">
    <check-button class="item-selector" @click.native="checkClick" :value="item.checked" />
    <div class="item-img">
      <img :src="item.imageUrl" alt="">
    </div>
    <div class="item-info">
      <p class="info-title">{{item.title}}</p>
      <p class="info-desc">{{item.desc}}</p>
      <div class="info-bottom">
        <div class="item-price left">¥{{item.price}}</div>
        <div class="item-count right">x{{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    checkClick(){
      console.log(this.item.iid)
      this.$store.commit('changeChecked', this.item.iid)
      // this.item.checked = !this.item.checked
    }
  }
}
</script>

<style scoped>
  .cart-list-item{
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding: 5px;
    display: flex;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info-title, .info-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .info-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>