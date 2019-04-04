import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import TodoBox from '@/components/TodoBox'
import Demo01 from '@/components/Demo01'
import Demo02 from '@/components/Demo02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/box',
      component: TodoBox
    },
     {
       path: '/demo01',
       component: Demo01
     },
    {
      path: '/demo02',
      component: Demo02
    },
  ]
})
