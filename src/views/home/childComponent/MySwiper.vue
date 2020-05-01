<template>
<!-- 使用v-if 等待数据加载完成再渲染，解决默认最后一张的问题 -->
  <swiper class="swiper" :options="swiperOption" ref="mySwiper" v-if="bannerList.length">
    <swiper-slide class="ss-item" v-for="(item, index) in bannerList" :key="index">
      <a :href="item.link" >
        <img :src="item.image" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'MySwiper',
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      bannerList:{
        type : Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          initialSlide: 0,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          speed: 800,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
　　　　　　　　/* 触摸滑动后是否继续轮播 */
　　　　　　　disableOnInteraction: false
          },
          loop: true
        }
      }
    }
  }
</script>

<style scoped>
  /* // @import './base.scss'; */
  .swiper{
    margin-bottom: 15xp;
  }

  .ss-item{
    width: 100%;
    height: auto;
    /* background-image: url('http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg'); */
  }
  
  .ss-item a{
    display: block;
    width: 100%;
    height: 100%;
  }

  .ss-item a img{
    width: 100%;
  }


 .swiper-pagination{
   bottom: 15px;
 }
</style>
