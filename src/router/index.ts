import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/microApp'),
  routes: [
    {
      path: '/',
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
