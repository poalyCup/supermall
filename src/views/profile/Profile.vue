<template>
  <div class="profile">
    <nav-bar><div slot="center" class="nav-title">大马猴商城</div></nav-bar>
    <user-info />
    <order-info />
    <account /> 
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import UserInfo from './childrenComponents/ProfileUserInfo'
  import OrderInfo from './childrenComponents/ProfileUserOrder'
  import Account from './childrenComponents/ProfileAccount'

  export default {
      name: 'Profile',
      components: {
        NavBar,
        UserInfo,
        OrderInfo,
        Account
      }
  }
</script>

<style scoped>
  .profile{
    font-family: Arial, Helvetica, sans-serif;
  }

</style>