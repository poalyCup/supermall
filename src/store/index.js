import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [
    ]
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
        product.checked = false
        state.cartList.push(product)
      }
    },
    changeChecked(state, iid){
      // const findProduct = state.cartList.find(item => item.iid = iid)
      // console.log(findProduct)
      // if(findProduct){
      //   findProduct.checked = !findProduct.checked
      // }
      console.log('store changeChecked')
      state.cartList.forEach(item => {
        if(item.iid == iid){
          item.checked = !item.checked
        }
      })
    },
    changeAllChecked(state){
      //获取未选中的商品
      const isSelectAll = state.cartList.find(item => !item.checked)

      if(isSelectAll){
        //如果有未选中的  ，全部设置为选中状态
        state.cartList.forEach(item => {
          item.checked = true
        })
      }else{
        //如果全部都为选中状态， 全部设置为 未选中状态
        state.cartList.forEach(item => {
          item.checked = false
        })
      }
      // state.cartList.forEach(item => {
      //   if(item.checked){
      //     item.checked = !item.checked
      //   }
      // })
    }
  },
  actions: {
  },
  getters: {
    getList(state){
      return state.cartList
    },
    
  },
  modules: {
  }
})
