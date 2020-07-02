<template>
  <div class="category">
    <!-- <h1>This is an Category page</h1> -->
    <menu-bar :menuList="category.list"/>
  </div>
</template>

<script>
import BScroll from 'components/common/scroll/BScroll'

import MenuBar from './childComponent/CategoryMenuBar'

import {getCategory} from 'network/category.js'
export default {
    name: 'Category',
    data(){
      return {
        category: {}
      }
    },
    components:{
      BScroll,
      MenuBar
    },
    created(){
      getCategory().then(res=>{
        this.category = res.data.category
      })
    }
}
</script>

<style >
  .wrapper{
    overflow: hidden;
  }
</style>