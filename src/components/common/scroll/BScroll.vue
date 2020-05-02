<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'BScroll',
  data(){
    return {
      BScroll: null
    }
  },
  mounted(){
    this.BScroll = new BScroll(this.$refs.wrapper,{
      click: true
    })
  }
}
</script>

<style scoped>
  /* .wrapper{
    height: 300px;
    background-color: lemonchiffon;
    overflow: hidden;
  } */
  /* .content{
    height: 100%;
  } */
</style>