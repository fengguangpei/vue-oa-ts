import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
const routerFactory = () =>
  createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/microApp' : ''),
    routes: [
      {
        path: '/:All(.*)*',
        name: 'Home',
        component: Home
      },
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
      },
      {
        path: '/RefreshPage',
        name: 'RefreshPage',
        component: Home
      }
    ]
  })
export default routerFactory
