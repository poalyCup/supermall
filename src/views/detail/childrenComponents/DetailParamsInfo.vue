<template>
  <div class="params-info">
    <table class="size-info" v-for="(item, index) in paramsInfo.rule.tables" :key="index">
      <tr v-for="(tr, indey) in item" :key="indey" class="size-tr">
        <td v-for="(td, indez) in tr" :key="indez" class="size-td">{{td}}</td>
      </tr>
    </table>

    <table class="product-info">
      <tr v-for="(item, index) in paramsInfo.info.set" :key="index">
        <td class="product-key">{{item.key}}</td>
        <td class="product-value">{{item.value}}</td>
      </tr>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object
    }
  }
}
</script>

<style scoped>
  .params-info{
    padding: 20px 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #666;
  }
  .product-info{
    border-collapse: collapse;
    text-align: left;
    border-top: 1px solid rgba(100,100,100,.1);
  }
  .product-info tr{
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1) ;
  }
  .product-key{
    width: 95px;
  }
  .product-value{
    color: #eb4868;
  }

  .size-info{
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
    width: 100%;
  }
  .size-tr{
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1) ;
    display: table-row;
  }
  .size-td{
    display: table-cell;
    vertical-align: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .size-td:nth-child(1){
  }

</style>