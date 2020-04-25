<template>
  <div id="home">
    <div class="fill"></div>
    <nav-bar>
      <div slot="center">supermall</div>
    </nav-bar>



    <h1>This is an Home page11</h1>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getMutlidata} from 'network/home'

export default {
    name: 'Home',
    data(){
      return{
        bannerList: []
      }
    },
    components: {
      NavBar
    },
    created(){
      getMutlidata().then(res => {
        this.bannerList = res.data.banner.list
        // console.log(res)
      })
    }
}
</script>

<style scoped>
  .fill{
    height: 44px;
  }
  #home {
    height: 3100px;
    background-color: var(--color-tint);
  }
</style>