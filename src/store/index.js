import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [
      {"iid":"1m745k0","imageUrl":"//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg","desc":"你的运动套装，也可以一起承包了~棉混纺的连帽卫衣，版型虽宽松，但因为有罗纹收口，穿起来立体挺括，能遮住多余的腰腹和双臂肉肉，展现青春活力.下半身搭配浅色直筒牛仔裤，向来是竹竿腿的助攻，翻边上的亮粉字母数字，和上衣一个调调，闪闪地时尚别致.清清爽爽的运动风其实也很拉好感der~","title":"2018秋季新款韩版女装字母印花宽松连帽休闲卫衣搭配松紧腰九分牛仔裤两件套女时尚运动套装潮","price":"98.00","count":1}
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
        state.cartList.push(product)
      }
    }
  },
  actions: {
  },
  getters: {
    getList(state){
      return state.cartList
    }
  },
  modules: {
  }
})
