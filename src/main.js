import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Demo02 from '@/components/Demo02'
Vue.config.productionTip = false


Vue.component('Myheader',Demo02)
//设为全局可用函数
Vue.prototype.$bus=new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
