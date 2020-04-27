<template>
  <div id="home">
    <div class="fill"></div>
    <nav-bar>
      <div slot="center">supermall</div>
    </nav-bar>
    <my-swiper :bannerList="bannerList"></my-swiper>
    <recommend-view :recommends="recommends"/>

    <h1>This is an Home page11</h1>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import MySwiper from './childComponent/MySwiper'
import RecommendView from './childComponent/RecommendView'

import {getMutlidata} from 'network/home'


export default {
    name: 'Home',
    data(){
      return{
        bannerList: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      MySwiper,
      RecommendView
    },
    created(){
      getMutlidata().then(res => {
        this.bannerList = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(res)
      })
    }
}
</script>

<style scoped>
  .fill{
    height: 41px;
  }
  #home {
    height: 3100px;
    /* background-color: var(--color-tint); */
  }
</style>