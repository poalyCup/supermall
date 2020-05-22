<template>
  <div class="bottom-check">
    <check-button class="selector-all" @checkBtnClick="changeAllSelectState" :value="isAllSelect"/>
    <div class="bottom-r">
      <span class="all">全选</span>
      <span>合计:￥{{ totalPrice }}</span>
      <span class="settlement" @click="goBuys">结算({{ settlementLength }})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      totalPrice:function(){
        let totalprice = 0
        const cartList = this.$store.getters.getList
        return cartList.filter( item => item.checked ).reduce((preValue, item) => {
          return preValue + item.count * item.price
        }, 0).toFixed(2)

        // return totalprice.toFixed(2)
      },
      settlementLength(){
        const cartList = this.$store.getters.getList
        return cartList.filter(item => item.checked).reduce((preValue, item) => {
          return preValue + item.count
        }, 0)
        // return this.$store.state.cartList.length
      },
      isAllSelect(){
        const cartList = this.$store.getters.getList
        if(cartList.length == 0) return false
        if(cartList.find(item => !item.checked)){
          return false
        }

        return true
      }
    },
    methods: {
      changeAllSelectState(){
        this.$store.commit('changeAllChecked')
      },
      goBuys(){
        if(!this.isAllSelect){
          this.$emit('noShopSelect')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-check{
    font-family: Arial, Helvetica, sans-serif;
    background-color: honeydew;
    position: relative;
    height: 40px;
    width: 100%;
    text-align: left;
    padding-left: 14%;
  }
  .selector-all {
    position: absolute;
    left: 0;
    width: 14%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span{
    line-height: 40px;
    display: inline-block;
  }
  .all{
    width: 50px;
    margin-left: -8px;
    color: #666;
    font-size: 15px;
  }

  .settlement{
    width: 30%;
    float: right;
    text-align: center;
    background-color: #ff4500;
    color: #eee;
  }
</style>