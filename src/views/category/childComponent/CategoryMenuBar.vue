<template>
  <b-scroll class="menu-bar">
    <ul>
      <li v-for="(item, index) in menuList" :key="index" 
          :class="{ active : index === currentIndex }" @click="menuItemClick(index)">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </b-scroll>
</template>

<script>
import BScroll from 'components/common/scroll/BScroll'

  export default {
    name: 'CategoryMenuBar',
    data(){
      return{
        currentIndex: 0
      }
    },
    components: {
      BScroll
    },
    props:{
      menuList: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      menuItemClick(index){
        if(index === this.currentIndex) return
        this.currentIndex = index
        this.$emit('menuClick', index)
      }
    }
  }
</script>

<style scoped>
  .menu-bar{
    width: 80px;
    height: calc(100vh - 93px);
  }
  .menu-bar li{
    height: 50px;
    line-height: 50px;
    background-color: rgba(200, 200, 200, .3);
  }
  .menu-bar li span{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .active span{
    background-color: #fff;
  }
</style>