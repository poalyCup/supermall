<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from 'components/content/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar
  },
  mounted(){
    //页面挂载时获取页面高度并设置--vh
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    //页面大小变化时在获取页面高度并设置--vh
    window.addEventListener('resize', ()=>{
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  }
}
</script>

<style>
@import 'assets/css/base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
