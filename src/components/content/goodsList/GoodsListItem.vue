<template>
  <div class="goods-item" @click="itemClick">
    <a>
      <img v-lazy="showImage" alt="">
    </a>
    <div class="goods-info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
    
  </div>  
</template>

<script>
export default {
  name: 'GoodsListItem',
  data(){
    return{
      iid: null
    }
  },
  props: {
    item:{
      type: Object,
      default: null
    }
  },
  methods: {
    itemClick(){
      // console.log(this.item)
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.iid
        }
      })
    }
  },
  computed: {
    showImage() {
      return this.item.image || this.item.show.img
    }
  },
  created(){
    this.iid = this.item.iid
  }
  
}
</script>

<style scoped>
  .goods-item{
  width: 48%;
  position: relative;
  padding: 5px;
  padding-bottom: 40px;
  }

  .goods-item img{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin: 0;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p{
    height: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
  }

  .goods-info .price{
    margin-right: 16px;
    color: hotpink;
  }
  
  .goods-info .collect{
    position: relative;
  }

  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>