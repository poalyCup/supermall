<template>
  <div class="recommends" v-if="recommends.length">
    <div class="re-item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommends{
    display: flex;
    width: 100%;
    padding: 0px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .recommends .re-item{
    flex: 1;
    text-align: center;
    width: 25%;
  }
  .recommends .re-item img{
    width: 88%;
    /* height:  78px; */
    /* overflow-x: scroll; */
  }
  .re-item span{
    display: inline-block;
    font-size: 0.9rem;
    margin-top: 9px;
  }
</style>