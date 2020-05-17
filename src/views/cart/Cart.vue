<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-scroll class="content" ref="cartScroll">
      <cart-list :cart-list="getCartList"/>
    </cart-scroll>

  </div>
</template>

<script>
import CartList from './childComponents/CartList'

import NavBar from 'components/common/navbar/NavBar'
import CartScroll from 'components/common/scroll/BScroll'



export default {
    name: 'Cart',
    components: {
      CartList,
      NavBar,
      CartScroll
    },
    computed:{
      cartLength(){
        return this.$store.state.cartList.length
      },
      getCartList(){
        return this.$store.getters.getList
      }
    },
    activated(){
      this.$refs.cartScroll.refreshin()
    }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  } 
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>