<template>
  <div class="user-info">
    <!-- <slot name="avatar"></slot> -->
      <div class="avatar">
        <img src="~assets/img/profile/tem.png" alt="">
      </div>
      <div class="login-info">
        <div>登录/注册</div>
        <div class="phone"><img src="~assets/img/profile/phone.svg" />绑定手机号</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileUserInfo',
}
</script>

<style>
  .user-info{
    padding: 10px;
    width: 100%;
    height: 100px;
    text-align: left;
    display: flex;
    box-shadow: 0 2px 5px rgba(100,100,100,0.09);
    border-radius: 0 0 5px 5px;
  }
  .avatar{
    height: 60px;
    flex: 1;
  }
  .avatar img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .login-info{
    padding: 13px 10px;
    margin-left: 10px;
    flex: 4;
    font-size: 14px;
    line-height: 1.5;
  }
  .phone img{
    width: 15px;
    height: 12px;
  }
</style>