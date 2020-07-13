<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" :current-index="currentIndex" @titleClick="navClick"/>
    <detail-scroll class="content" ref="dScroll" 
                   :probeType="3" @scroll="detailScroll">
        <detail-swiper :topImgs="topImages"></detail-swiper>
        <detail-base-info :base-info="baseInfo"/>
        <detail-shop-info :shopInfo="shopInfo"/>
        <detail-image-info :image-info="imageInfo" @imageInfoLoad="imageInfoLoad"/>
        <detail-params-info ref="params" :params-info="paramsInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <goods-list ref="goods" :goods-list="recommendList" />
      </detail-scroll>
      <detail-bottom-bar @addToCart="addToCart"/>
      <toast ref="toast"/>
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
  import DetailBottomBar from './childrenComponents/DetailBottomBar'

  import DetailScroll from 'components/common/scroll/BScroll'
  import GoodsList from 'components/content/goodsList/GoodsList'
  import Toast from 'components/common/toast/Toast'

  import {getDetail, Goods, getRecommend} from 'network/detail'

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
      DetailBottomBar,
      DetailScroll,
      GoodsList,
      Toast
    },
    data(){
      return{
        iid: null,
        currentIndex: 0,
        result: null,
        topImages: [],
        baseInfo: {},
        shopInfo: {},
        imageInfo: {},
        paramsInfo: {},
        commentInfo: {},
        recommendList: [],
        themeTops:null
      }
    },
    methods: {
      imageInfoLoad(){
        //图片加载完成时，进行scroll的刷新以及获取各主题的offsetTop
        this.$refs.dScroll.refreshin()
        this._getThemeOffsetTop()
      },
      navClick(index){
        this.currentIndex = index
        this.$refs.dScroll.scrollToo(-(this.themeTops[index] - 50), 500)
      },
      detailScroll(position){
        const positionY = -position.y
        const length = this.themeTops.length
        for(let i = 0; i < length-1;  i++){
          if((this.currentIndex !== i) && (positionY >= this.themeTops[i] && positionY < this.themeTops[0])){
            this.currentIndex = i
            break
          }
        }
      },
      _getThemeOffsetTop(){
        //各个主题的offsetTop获取方法
        this.themeTops = []
        this.themeTops.push(0)
        this.themeTops.push(this.$refs.params.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.goods.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },
      addToCart(){
        //将商品加入到VueX中，方便购物车页面读取数据
        const product = {}
        product.iid = this.iid
        product.imageUrl = this.topImages[0]
        product.desc = this.imageInfo.desc
        product.title = this.baseInfo.title
        product.price = this.baseInfo.nowPrice
        this.$store.commit('addProductToCart', product)
        setTimeout(()=>{
          this.$refs.toast.show("加入购物车成功!")
        },200)
      },



      //网络请求
      _getDetailData(){
        const iid = this.$route.query.iid
        this.iid = iid
        getDetail(this.iid).then( res => {
          this.result = res.result
          this.topImages.push(...res.result.itemInfo.topImages)
          //基础信息的内容比较混乱，所以使用对象对数据进行包装
          this.baseInfo = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
          //获取店铺信息
          this.shopInfo = res.result.shopInfo
          //获取商品详情图片
          this.imageInfo = res.result.detailInfo
          //获取商品参数
          this.paramsInfo = res.result.itemParams
          //获取商品评论，只取一条作展示，
          this.commentInfo = res.result.rate.list[0]
        })
      }
    },
    created(){
      this._getDetailData()
      
      getRecommend().then(res => {
        this.recommendList = res.data.list
      })
      // this.iid = this.$route.query.iid
      //   // this.iid = iid
      //   getDetail(this.iid).then( res => {
      //     this.result = res.result
      //     this.topImages.push(...res.result.itemInfo.topImages)
      //     //基础信息的内容比较混乱，所以使用对象对数据进行包装
      //     this.baseInfo = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      //     this.shopInfo = res.result.shopInfo
      //     this.imageInfo = res.result.detailInfo
      //     this.paramsInfo = res.result.itemParams
      //     //只取一条作展示
      //     this.commentInfo = res.result.rate.list[0]
      //   })
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .fill{
    height: 41px;
  }

  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>