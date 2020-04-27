<template>
  <div id="home">
    <div class="fill"></div>
    <nav-bar class="home-nav">
      <div slot="center">supermall</div>
    </nav-bar>
    <my-swiper :bannerList="bannerList"></my-swiper>
    <recommend-view :recommends="recommends"/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>

    <h1>This is an Home page11</h1>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

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
      TabControl,
      MySwiper,
      RecommendView
    },
    created(){
      getMutlidata().then(res => {
        this.bannerList = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(res)
      })
    }
}
</script>

<style scoped>
  .fill{
    height: 41px;
  }

  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
  }

  #home {
    height: 3100px;
    /* background-color: var(--color-tint); */
  }

  .tab-control{
    box-shadow: 0 2px 4px rgba(100,100,100,0.09);
    /* sticky 自动根据 top 的值在指定位置将元素 fixed */
    position: sticky;
    top: 44px;
  }
</style>