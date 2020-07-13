<template>
  <b-scroll class="category-detail" ref="cdscroll">
    <div class="flex-container">
      <div class="detail-item" v-for="(item, index) in detailItemList" 
            :key="index" >
        <img :src="item.image" alt="" @load="imgLoad">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </b-scroll>
</template>

<script>
  import BScroll from 'components/common/scroll/BScroll'
  export default {
    name: 'CategoryDetail',
    data(){
      return {
        images: 0
      }
    },
    props: {
      detailItemList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      BScroll
    },
    methods: {
      imgLoad(){
        this.images++
        if(this.images === this.detailItemList.length){
          this.$refs.cdscroll.refreshin()
          setTimeout(()=>{
            this.images = 0
          },500)
        }
      }
    }
  }
</script>

<style scoped>
  .category-detail{
    /* display: flex; */
    width: calc(100vw - 80px);
    height: calc(var(--vh, 1vh) * 100 - 93px);
    
  }
  .flex-container{
    display: flex;
    flex-wrap: wrap;
    padding: 10px 9px;
    
  }
  .detail-item{
    width: 100px;
    height: 103px;
    margin: 8px 2px;
    align-content: space-around;
  }
  .detail-item img{
    width: 80px;
    height: auto;
  }
  .detail-item p{
    font-size: 14px;
    margin-top: 3px;
  }
</style>