<template>
  <div class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评论</div>
      <div class="header-more">更多<i class="arrow-right"></i></div>
    </div>
    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment-detail">
      <p>{{commentInfo.content}}</p>
      <div class="detail-other">
        <span class="date">{{commentInfo.created | commetnDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="detail-img" v-if="commentInfo.images">
        <img v-for="(item, index) in commentInfo.images" :key="index"
             :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils.js'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object
    }
  },
  filters:{
    commetnDate:function(value){
      const date = new Date(value*1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .header-title{
    float: left;
    height: 60px;
    font-size: 15px;
    line-height: 60px;
  }
  .header-more{
    float: right;
    font-size: 15px;
    line-height: 60px;
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

  /* ------------分割线-------------- */
  .user-info {
    padding: 10px 0 5px;
  }

  .user-info img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .user-info span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }

  /* ------------分割线-------------- */
  .comment-detail{
    font-size: 14px;
    line-height: 1.5;
    padding: 0 5px 15px 5px;
  }
  .detail-other{
    margin-top: 8px;
    font-size: 12px;
    color: #999;
  }
  .date{
    margin-right: 10px;
  }

  .detail-img{
    margin-top: 5px;
    height: 90px;
    overflow: hidden;
  }

  .detail-img img{
    height: 100%;
  }
</style>