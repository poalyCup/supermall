<template>
  <div id="home">
    <div class="fill"></div>
    <nav-bar class="home-nav">
      <div slot="center">大马猴商城</div>
    </nav-bar>
    <div v-if="!bannerList.length" class="net-err">
      <div>你的网络裂开啦。。。。。</div>
    </div>
    <tab-control class="tab-control1" :titles="['流行', '新款', '精选']"
                      @tabClick="tabClick" ref="tabControl1" 
                      v-show="isTabControlFixed"/>
    <b-scroll class="content" ref="scroll" 
              :probeType="3" @scroll="contentScroll"
              :pullUpLoad="true" @pullUpLoad="loadMore">
        <my-swiper :bannerList="bannerList" @imgLoad="getOffsetTop"></my-swiper>
        <recommend-view :recommends="recommends"/>
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']"
                      @tabClick="tabClick" ref="tabControl"/>
        <goods-list :goodsList="goods[currentType].list" />
        
    </b-scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"/>
    

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
import BackTop from 'components/content/backTop/BackTop'

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
        currentType: 'pop',
        isShowBackTop: false,
        offsetTop: 0,
        isTabControlFixed: false
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      BScroll,
      BackTop,
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
    destroyed(){
      console.log('destroyed')
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
        //同步两个tabControl 当前选择的索引
        this.$refs.tabControl.currentIndex = index
        this.$refs.tabControl1.currentIndex = index

        
      },
      backTop(){
        this.$refs.scroll.backTop(0, 30, 800)
      },
      contentScroll(position){
        //判定返回顶部按钮是否显示方法
        this.isShowBackTop = (-position.y) > 1000
        //判断 第二个tabControl 是否显示方法
        this.isTabControlFixed = (-position.y) > this.offsetTop
      },
      loadMore(){
        this.getGoods(this.currentType)
      },
      getOffsetTop(){
        //获取 tabControl的offsetTop值
        //根据该值判断tabControl在什么位置触发吸顶效果
        this.offsetTop = this.$refs.tabControl.$el.offsetTop
        // console.log(this.offsetTop)
      },


      /*
      * 网络请求相关方法
      */
      getGoods(type){
        const page = this.goods[type].page + 1
        getGoodsList(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page ++

          this.$refs.scroll.finishPull()
        }).catch(err=>{
          console.log(err)
        })
      }
    }
}
</script>

<style scoped>
  #home {
    position: relative;
    height: 100vh;
    margin-bottom: 49px;
    font-family: Arial, Helvetica, sans-serif;
    /* background-color: var(--color-tint); */
  }

  .fill{
    height: 41px;
  }
  .net-err{
    display: flex;
    width: 100%;
    height: calc(100vh - 94px);
    position: relative;
    z-index: 5;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .net-err div{
    height: 100px;
  }

  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0; 
    z-index: 9;
  }

  .tab-control1{
    margin-top: 3px;
    position: relative;
    z-index: 10;
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