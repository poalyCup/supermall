import { request } from './request'

export function getCategory(){
  return request({
    url: 'category'
  })
}

export function getCategoryM(maitKey){
  return request({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}