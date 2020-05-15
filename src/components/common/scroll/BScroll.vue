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
    },
    pullUpLoad: {
      type: Boolean,
      default : false
    }
  },
  methods: {
    backTop(x, y, time = 500){
      this.scroll.scrollTo(x, y, time)
    },
    finishPull(){
      this.scroll.finishPullUp()
      this.scroll.refresh()
    },
    refreshin(){
      this.scroll.refresh()
    },
    scrollToo(y, time=500){
      this.scroll.scrollTo(0, y, time)
    }

  },
  mounted(){
    this.scroll = new BScroll(this.$refs.scroll,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll', (position) => {
      // console.log(position.y)
      // if(-position.y == 500){
      //   console.log('500')
      // }
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullUpLoad')
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: calc(100% - 93px) ;
}
  
  /* .content{
    height: 100%;
  } */
</style>