import Toast from './Toast'

const obj = {}

obj.install = function(Vue){
  //创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //根据组件构造器，创建出一个组件对象
  const toast = new toastContrustor()
  
  //将组件对象手动挂在到某个元素上
  toast.$mount(document.createElement('div'))
  
  //将组件内容添加到document上
  document.body.appendChild(toast.$el)


  Vue.prototype.$toast = Toast;
}


export default obj