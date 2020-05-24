import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import Toast from 'components/common/toast'
import LazyLoad from 'vue-lazyload'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.use(LazyLoad, {
  loading: require('assets/img/loading.gif')
})

// Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
