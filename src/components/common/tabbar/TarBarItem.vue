<template>
    <div class="tab-bar-item">
      <!-- <img src="../../assets/img/tabbar/home.svg"/>
      <div>首页</div> -->
      <div v-if="!isActive" @click="itemClick"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TarBarItem',
    props: {
      path: String,
      activeStyle:{
        type: String,
        defalut: 'bolder'
      }
    },
    data(){
      return {
        // isActive: false
      }
    },
    methods: {
      itemClick(){
        // console.log(this.$route.path.indexOf(this.path));
        // catch异常解决多点击报错问题
        this.$router.replace(this.path).catch(err => err)
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
}
</script>

<style scoped>

 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
    height: 26px;
    height: 26px;
    vertical-align: middle;
    margin-top: 3px;
  }

  .active{
    font-weight: bolder;
  }

</style>