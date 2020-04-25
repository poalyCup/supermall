<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>

    <div class="center"><slot name="center"></slot></div>
    
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .nav-bar {
    background-color: rgb(251,242,227);
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    width: 100%;
    font-size: var(--font-size);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    box-shadow: 0 1px 2px rgba(100,100,100,0.1);
    border-radius: 0 0 5px 5px;
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>