<template>
<div class="goods-list"  v-if="goodsList.length">
  <goods-list-item v-for="(item, index) in goodsList" :key="index" :item="item"/>
</div>
  
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
}
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap:  wrap;

    justify-content: space-evenly;
    
  }
</style>