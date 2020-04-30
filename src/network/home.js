import {request} from './request'

export function getMutlidata(){
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsList(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}