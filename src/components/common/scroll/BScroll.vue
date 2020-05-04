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
  props: {
    probeType: {
      type: Number,
      default: 0
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
      probeType: this.probeType
    })

    this.scroll.on('scroll', (position) => {
      // console.log(position.y)
      // if(-position.y == 500){
      //   console.log('500')
      // }
      this.$emit('scroll', position)
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