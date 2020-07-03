<template>
  <div class="category">
    <!-- <h1>This is an Category page</h1> -->
    <category-nav-bar />
    <menu-bar class="mebu-bar" :menuList="category.list" @menuClick="menuClick"/>
    <category-detail class="detail" :detailItemList="detailItemList"/>
  </div>
</template>

<script>
  import BScroll from 'components/common/scroll/BScroll'
  import NavBar from 'components/common/navbar/NavBar'

  import MenuBar from './childComponent/CategoryMenuBar'
  import CategoryDetail from './childComponent/CategoryDetail'
  import CategoryNavBar from './childComponent/CategoryNavBar'

  import {getCategory} from 'network/category.js'
  import {getCategoryM} from 'network/category.js'


  export default {
      name: 'Category',
      data(){
        return {
          category: {},
          detailItemList: []
        }
      },
      components:{
        BScroll,
        MenuBar,
        CategoryDetail,
        CategoryNavBar
      },
      methods: {
        _getCategoryM(maitKey){
          getCategoryM(maitKey).then(res => {
            this.detailItemList = res.data.list
          })
        },
        menuClick(index){
          this._getCategoryM(this.category.list[index].maitKey)
        }
      },
      created(){
        getCategory().then(res=>{
          this.category = res.data.category
          this._getCategoryM(this.category.list[0].maitKey)
        })
      }
  }
</script>

<style scoped>
  .category{
    position: relative;
    margin-top: 44px;
  }
  .menu-bar{
    float: left;
  }
  .detail{
    float: right;
  }

</style>