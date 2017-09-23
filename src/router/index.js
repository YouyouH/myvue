import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import you1 from '@/components/you1'
import you2 from '@/components/you2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/you1',
      name:'you1',
      component:you1
    },
    {
      path:'/you2',
      name:'you2',
      component:you2
    }
  ]
})
