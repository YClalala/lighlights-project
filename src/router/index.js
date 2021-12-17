import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/pages/index/index.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = new Router({
  mode: 'hash',
  routes
})
export default router