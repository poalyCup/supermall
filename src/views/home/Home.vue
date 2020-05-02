<template>
  <div id="home">
    <div class="fill"></div>
    <nav-bar class="home-nav">
      <div slot="center">supermall</div>
    </nav-bar>

    <b-scroll class="content">
        <my-swiper :bannerList="bannerList"></my-swiper>
        <recommend-view :recommends="recommends"/>
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                      @tabClick="tabClick"/>
        <goods-list :goodsList="goods[currentType].list" />
      
    </b-scroll>
    

    <!-- <h1>This is an Home page11</h1>
    <h1>This is an Home page11</h1>
    <h1>This is an Home page11</h1>
    <h1>This is an Home page11</h1> -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import BScroll from 'components/common/scroll/BScroll'

import MySwiper from './childComponent/MySwiper'
import RecommendView from './childComponent/RecommendView'

import {getMutlidata, getGoodsList} from 'network/home'


export default {
    name: 'Home',
    data(){
      return{
        bannerList: [],
        recommends: [],
        goods:{
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        currentType: 'pop'
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      BScroll,
      MySwiper,
      RecommendView
    },
    created(){
      getMutlidata().then(res => {
        this.bannerList = res.data.banner.list
        this.recommends = res.data.recommend.list
        // console.log(res)
      })

      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')
    },
    methods: {
      /**
        事件监听相关方法
       */
      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2: 
            this.currentType = 'sell'
            break
        }
      },


      
      getGoods(type){
        const page = this.goods[type].page + 1
        getGoodsList(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page ++
        })
      }
    }
}
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    /* background-color: var(--color-tint); */
  }

  .fill{
    height: 41px;
  }

  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 9;
  }

  

  .tab-control{
    box-shadow: 0 2px 4px rgba(100,100,100,0.09);
    /* sticky 自动根据 top 的值在指定位置将元素 fixed */
    /* position: sticky;
    top: 43px; */
    z-index: 9;
  }

  .content{
    position: absolute;

    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>