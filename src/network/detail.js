import {request} from './request'

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

//基础信息的内容比较混乱，所以使用对象对数据进行包装
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}