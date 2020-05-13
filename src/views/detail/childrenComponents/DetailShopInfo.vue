<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="shopInfo.shopLogo" alt="">
      <span class="shop-name">{{shopInfo.name}}</span>
    </div>
    <div class="shop-census">
      <div class="census-left">
        <div class="sells">
          <div class="sells-cout">{{ shopInfo.cSells | sellCount }}</div>
          <div class="census-text">总销量</div>
        </div>
        <div class="goods">
          <div class="goods-count">{{ shopInfo.cGoods }}</div>
          <div class="census-text">全部宝贝</div>
        </div>
      </div>
      <div class="census-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="better" :class="{'better-better': item.isBetter}"><span>{{ item.isBetter? '高' : '中' }}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="open-shop">
      <div>进店溜溜</div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object
    }
  },
  filters:{
    sellCount: function(value){
      if(value < 10000) return value
      return (value/10000).toFixed(2) + '万'
    }
  }
}
</script>

<style scoped>
  .shop-info {
    width: 100%;
    padding: 35px 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-title{
    text-align: left;
    line-height: 50px;
    display: flex;
  }
  /* .shop-title img::after{
    content: '';
    clear: both;
  } */
  .shop-title img{
    display: inline-block;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 5px;
    box-shadow: 0 0 1px 1px gray;
  }
  .shop-title .shop-name{
    display: inline-block;
    font-family: Helvetica;
    font-size: 18px;
    text-align: left;
    margin-left: 3px;
  }

  /* ------------分割线-------------- */
  .shop-census{
    margin-top: 10px;
    display: flex;
    width: 100%;
    align-items: center;
  }
  .census-text{
    font-size: 14px;
    margin-top: 6px;
  }
  .census-left, .census-right{
    flex: 1;
    text-align: center;
    font-family: Helvetica;
  }
  /* census 左侧内容 */
  .census-left{
    height: 40px;
    display: flex;
    border-right: 1px solid rgba(0,0,0,0.1);
    justify-content: space-evenly;
  }
  .sells, .goods{
    font-size: 18px;
  }
  /* census 右侧内容 */
  .census-right table{
    margin-left: 31px;
    font-size: 14px;
    text-align: left;
    border-collapse: separate;
    border-spacing: 10px 10px;
  }
  .score{
    color: #5ea732;

  }

  .score-better{
    color: #f13e3a;
  }
  .better{
    font-size: 13px;
    text-align: center;
    background-color: #5ea732;
    color: #fff;
  }
  .better-better{
    background-color: #f13e3a;
  }

  /* ------------分割线-------------- */

  .open-shop{
    font-size: 15px;
    margin-top: 5px;
  }
  .open-shop div{
    margin: 0 auto;
    width: 40%;
    line-height: 30px;
    background-color: #f2f5f8;
    border-radius: 10px;
    color: #666;
  }

</style>