import {request} from './request'

export function getMutlidata(){
  return request({
    url: '/home/multidata'
  })
}