import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/microApp' : ''),
  routes: [
    {
      path: '/CarManage',
      name: 'CarManage',
      component: () => import('../views/car/CarManage.vue')
    },
    {
      path: '/CarLog',
      name: 'CarLog',
      component: () => import('../views/car/CarLog.vue')
    },
    {
      path: '/RequestReview',
      name: 'RequestReview',
      component: () => import('../views/car/RequestReview.vue')
    }
  ]
})
export default router
