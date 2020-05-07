<template>
  <div class="de-nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item" v-for="(item, index) in titles" 
            :key="index" :class="{active : index === currentIndex }"
            @click="titleClick(index)">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
  .back img{
    width: 30px;
    vertical-align: middle;
  }

  .title{
    display: flex;
  }

  .title .title-item{
    flex: 1;
  }

  .active{
    color: #000;
    font-weight: bolder;
  }
</style>