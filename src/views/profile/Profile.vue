<template>
  <div class="profile">
    <nav-bar><div slot="center" class="nav-title">大马猴商城</div></nav-bar>
    <user-info />
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childrenComponents/ProfileUserInfo'

  export default {
      name: 'Profile',
      components: {
        NavBar,
        UserInfo
      }
  }
</script>

<style scoped>
  .profile{
    font-family: Arial, Helvetica, sans-serif;
  }

</style>