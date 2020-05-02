<template>
  <div class="wrapper" ref="scroll">
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
      scroll: null
    }
  },
  methods: {
    backTop(x, y, time = 500){
      this.scroll.scrollTo(x, y, time)
    }

  },
  mounted(){
    this.scroll = new BScroll(this.$refs.scroll,{
      click: true,

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