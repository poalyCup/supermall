<template>
  <div id="tab-control">
    <div class="ct-item" v-for="(item, index) in titles" 
    :key="index" :class="{active : index === currentIndex }"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  /* ededed */
  #tab-control{
    background-color: #fff;
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
  }
  .ct-item{
    flex: 1;
  }

  .ct-item span{
    padding: 3px;
  }

  .active{
    color: #000;
    font-weight: bolder;
  }

  .active span{
    border-bottom: 2px solid #000;
  }
</style>