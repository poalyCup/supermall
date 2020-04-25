import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/h8' ,
        timeout: 3000
    })

    //axios拦截器
    //请求拦截
    instance.interceptors.request.use(config => {
        // console.log(config)
        // 拦截后必须将config   return出去，不然网络无法继续请求
        return config
    }, err => {
        console.log(err)
    })
    //响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}