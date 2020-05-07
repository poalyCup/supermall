<template>
  <div id="app">
    <keep-alive><router-view></router-view></keep-alive>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from 'components/content/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabbar
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
