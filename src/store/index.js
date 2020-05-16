import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addProductToCart(state, product){
      //查询是否存在相同iid的商品
      const oldProduct = state.cartList.find(item => item.iid === product.iid)
      if(oldProduct){
        //如果存在，商品数量+1
        oldProduct.count++
      }else{
        //如果不存在，设置数量为1，并且加入到购物车列表中
        product.count = 1
        state.cartList.push(product)
      }
    }
  },
  actions: {
  },
  getters: {

  },
  modules: {
  }
})
