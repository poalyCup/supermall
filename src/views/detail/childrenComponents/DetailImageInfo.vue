<template>
  <div class="image-info">
    <div class="info-desc">
      <div class="desc-start"></div>
      <div class="desc-text">{{imageInfo.desc}}</div>
      <div class="desc-end"></div>
    </div>
    <div class="info-image">
      <span>{{imageInfo.detailImage[0].key}}</span>
      <div v-for="(item, index) in imageInfo.detailImage[0].list" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailImageInfo',
  props: {
    imageInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .image-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;

  }
  .info-desc{
    padding: 0 20px;
  }
  .info-desc .desc-start{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }
  .info-desc .desc-start::before{
    content: '';
    height: 5px;
    width: 5px;
    background-color: #333;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .info-desc .desc-end{
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
    float: right;
  }
  .info-desc .desc-end::before{
    content: '';
    height: 5px;
    width: 5px;
    background-color: #333;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .desc-text{
    padding: 10px 0;
    font-family: Helvetica;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: #666;
    text-indent: 2em;
  }

  .info-image{
    width: 100%;
    padding: 10px 0;
    text-align: left;
  }
  .info-image span{
    display: block;
    padding: 6px 10px;
  }
  .info-image img{
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>