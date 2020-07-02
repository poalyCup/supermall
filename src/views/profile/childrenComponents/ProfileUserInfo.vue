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
      <div class="header-more"><i class="arrow-right"></i></div>
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

  .header-more{
    float: right;
    padding-right: 5px;
    line-height: 80px;
  }
  .arrow-right{
    border-top: 1px solid #999;
    border-left: 1px solid #999;
    width: 9px;
    height: 9px;
    background-color: transparent;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    display: inline-block;
    margin-left: .1rem;
  }
</style>
