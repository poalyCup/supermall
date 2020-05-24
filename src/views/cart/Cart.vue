<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{ cartLength }})
        <img src="~assets/img/loading.svg">
      </div>
    </nav-bar>
    <cart-scroll class="content" ref="cartScroll">
      <cart-list :cart-list="getCartList"/>
    </cart-scroll>
    <cart-bottom-bar @noShopSelect="showToastMessage"/>
    <toast ref="cartToast"/> 
  </div>
</template>

<script>
import CartList from './childComponents/CartList'
import CartBottomBar from './childComponents/CartBottomBar'

import NavBar from 'components/common/navbar/NavBar'
import CartScroll from 'components/common/scroll/BScroll'
import Toast from 'components/common/toast/Toast'



export default {
    name: 'Cart',
    components: {
      CartList,
      CartBottomBar,
      NavBar,
      CartScroll,
      Toast
    },
    computed:{
      cartLength(){
        return this.$store.state.cartList.length
      },
      getCartList(){
        return this.$store.getters.getList
      }
    },
    methods: {
      showToastMessage(){
        this.$refs.cartToast.show('请选择需要购买的商品')
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
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>