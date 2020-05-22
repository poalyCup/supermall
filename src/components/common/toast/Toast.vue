<template>
  <div class="toast" v-show="isShow">
    <div >{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data(){
      return {
        message: '加入购物车成功！',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 1000){
        this.message = message
        this.isShow = true

        setTimeout( () => {
          this.isShow = false
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    background-color: rgba(0 , 0, 0, .7);
  }
</style>