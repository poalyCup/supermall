<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content">
        <detail-swiper :topImgs="topImages"></detail-swiper>
        <detail-base-info :base-info="baseInfo"/>
        <detail-shop-info :shopInfo="shopInfo"/>
        <!-- <detail-image-info :image-info="imageInfo"/> -->
        <!-- <detail-params-info :params-info="paramsInfo"/> -->
        <detail-comment-info :comment-info="commentInfo"/>
      </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childrenComponents/DetailNavBar'
  import DetailSwiper from './childrenComponents/DetailSwiper'
  import DetailBaseInfo from './childrenComponents/DetailBaseInfo'
  import DetailShopInfo from './childrenComponents/DetailShopInfo'
  import DetailImageInfo from './childrenComponents/DetailImageInfo'
  import DetailParamsInfo from './childrenComponents/DetailParamsInfo'
  import DetailCommentInfo from './childrenComponents/DetailCommetnInfo'

  import Scroll from 'components/common/scroll/BScroll'

  import {getDetail, Goods} from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      Scroll
    },
    data(){
      return{
        iid: null,
        result: null,
        topImages: [],
        baseInfo: {},
        shopInfo: {},
        imageInfo: {},
        paramsInfo: {},
        commentInfo: {}
      }
    },
    methods: {
      _getDetailData(){
        const iid = this.$route.query.iid
        this.iid = iid
        getDetail(this.iid).then( res => {
          this.result = res.result
          this.topImages.push(...res.result.itemInfo.topImages)
          //基础信息的内容比较混乱，所以使用对象对数据进行包装
          this.baseInfo = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

          this.shopInfo = res.result.shopInfo

          this.imageInfo = res.result.detailInfo

          this.paramsInfo = res.result.itemParams

          //只取一条作展示
          this.commentInfo = res.result.rate.list[0]
        })
      }
    },
    created(){
      this._getDetailData()
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .fill{
    height: 41px;
  }

  /* .detail-nav{
    position: relative;
    z-index: 9; 
  } */

  .content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>