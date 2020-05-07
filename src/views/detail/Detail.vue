<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    Detail
    {{this.$route.query.iid}}
    <button @click="cons">fff</button>
  </div>
</template>

<script>
import DetailNavBar from './childrenComponents/DetailNavBar'

export default {
  name: 'Detail',
  components: {
    DetailNavBar
  },
  data(){
    return{
      iid: null
    }
  },
  methods: {
    cons(){
      console.log(this.iid)
    }
  },
  created(){
    this.iid = this.$route.query.iid
  }
}
</script>

<style scoped>

</style>