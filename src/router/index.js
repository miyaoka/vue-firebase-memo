import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Status from '@/components/Status'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/status/:key',
      name: 'status',
      component: Status
    }
  ]
})
